const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
//const dotenv = require("dotenv")
const signUpUrls = require('./routes/signUp')
const authUrl = require('./routes/auth')
const config = require('config')

app.use(express.json())
//dotenv.config()
const db = config.get('mongoURI');
mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err))
        //() => console.log("Database connected"))


app.use(cors())
app.use('/app',signUpUrls)
app.use('/app',authUrl)

/*app.get("/",function(req,res) {
    res.send("Welcome to my web server");
})*/

const PORT = 8080;
app.listen(PORT, function() {
    console.log("Server is ready at " + PORT);
})