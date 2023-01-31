const express = require('express');
const auth = express.Router()
const connect = require('../../sqlConnect').connect
const util = require('../../db-utilitys/auth')

auth.use((req, res, next) => {
    
    next()
})



auth.post('/login',util.login,(req,res) => {console.log(req.session.user);})

auth.post('/register',(req,res) => {
    
    console.log('im in register');
})

auth.post('/auth',util.isAuthenticated, (req,res) => {
   console.log('im in auth');
   
})

auth.post('/logout',util.logout,(req,res) => {

})

module.exports = auth;