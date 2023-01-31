const express = require('express');
const auth = express.Router()
const connect = require('../../sqlConnect').connect
const util = require('../../db-utilitys/auth')

auth.use((req, res, next) => {
    
    next()
})



auth.post('/login',util.login,(req,res) => {})

auth.post('/register',(req,res) => {
    console.log('im in register');
})

auth.post('/auth',util., (req,res) => {
    res.json({logged:true})
})

auth.post('/logout',util.logout,(req,res) => {

})

module.exports = auth;