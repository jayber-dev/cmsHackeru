const express = require('express');
const auth = express.Router()
const connect = require('../../sqlConnect').connect
const util = require('../../db-utilitys/auth')

auth.use((req, res, next) => {

    next()
})



auth.post('/login', util.login, (req, res) => { })

auth.post('/googleLogin', (req, res) => {

    const user = {
        id: req.body.id,
        email: req.body.email
    }
    res.json({ "isLogged": true, })
})

auth.post('/signup', util.signup, (req, res) => { })

auth.post('/auth', util.isAuthenticated, (req, res) => { })

// auth.post('/auth/google/callback') 
// there is no need in the poject case to do auth with google
// for the reason that anyone can enter or signup to the site

auth.post('/logout', util.logout, (req, res) => { })

module.exports = auth;