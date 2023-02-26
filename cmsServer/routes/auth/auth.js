const express = require('express');
const auth = express.Router()
const connect = require('../../sqlConnect').connect
const util = require('../../db-utilitys/auth')

auth.use((req, res, next) => {
    
    next()
})



auth.post('/login',util.login,(req,res) => {})

auth.post('/googleLogin',(req,res)=> {
    
    const user = {
        id:req.body.id,
        email:req.body.email
    }
    req.session.user = user
    
    res.json({"isLogged":true,})
})

auth.post('/signup',util.signup,(req,res) => {})

auth.post('/auth',util.isAuthenticated, (req,res) => {})

// auth.post('/auth/google/callback')

auth.post('/logout',util.logout,(req,res) => {})

module.exports = auth;