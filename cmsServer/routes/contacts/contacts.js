const express = require('express');
const contactsUtil = require('../../db-utilitys/contacts')
const contacts = express.Router()

contacts.use((req, res, next) => {
    next()
})

contacts.get('/',contactsUtil.getContacts, (req,res) => {})

contacts.get('/contact/:id', contactsUtil.getSingleContact,(req,res,next) =>{})

contacts.get('/search/:query',contactsUtil.findcontact, (req,res) => {})

contacts.delete('/deleteContact/:id',contactsUtil.deleteContact, (req,res) =>{
        
})

module.exports = contacts