const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

router.post('/auth',async (request,response) => {
    
    const {email, password} = request.body

    if (!email || !password){
        return response.status(400).json({msg: 'Please enter all fields'});
    }
    
    User.findOne({ email })
        .then(user => {
            if (!user) return response.status(400).json({msg: 'User does not exist'});
        bcrypt.compare(password,user.password)
        .then(isMatch => {
            if(!isMatch) return response.status(400).json({ msg:'Invalid credentials' });
            jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 86400},
                (err,token) => {
                if(err) throw err;
                
                response.json({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    }
                })
        })
    })
})
})
router.get('/auth')

module.exports = router