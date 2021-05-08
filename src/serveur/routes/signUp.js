const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

router.post('/signup',async (request,response) => {
    
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const {username, email, password} = request.body
    
    const signedUpUser = new signUpTemplateCopy({
        username:username,
        email:email,
        password:securePassword,
    })
    
    if (!username || !email || !password){
        return response.status(400).json({msg: 'Please enter all fields'});
    }
    
    User.findOne({ email })
        .then(user => {
            if (user) return response.status(400).json({msg: 'User already exist'});
        
    
        signedUpUser.save()
        .then(data =>{
            jwt.sign(
                { id: data.id },
                config.get('jwtSecret'),
                { expiresIn: 86400},
                (err,token) => {
                if(err) throw err;
                response.json({token,data})})
        })
})
})

router.get('/signin',(req,res) => {
    console.log(signin);
})

module.exports = router