const express = require('express');
const contactsUtil = require('../../db-utilitys/contacts')
const contacts = express.Router()

contacts.use((req, res, next) => {
    next()
})

contacts.get('/',contactsUtil.getContacts, (req,res) => {  
    console.log('im in contacts');
    
    return res.json(req.body)
})

module.exports = contacts