const express = require('express');
const auth = express.Router()

auth.use((req, res, next) => {
    next()
})
auth.post('/login',(req,res) => {
    console.log('in login');
    console.log(req.body.email);
    
    return res.json(req.body)
})

auth.post('/register',(req,res) => {
    console.log('im in register');
})

module.exports = auth;