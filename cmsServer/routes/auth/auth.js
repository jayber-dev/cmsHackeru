const express = require('express');
const auth = express.Router()
const connect = require('../../sqlConnect').connect
const util = require('../../db-utilitys/auth')

auth.use((req, res, next) => {
    
    next()
})



auth.post('/login',util.login,(req,res) => {})

auth.post('/register',util.signup,(req,res) => {})

auth.post('/auth',util.isAuthenticated, (req,res) => {})

auth.post('/logout',util.logout,(req,res) => {})

module.exports = auth;