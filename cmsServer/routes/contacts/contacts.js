const express = require('express');
const contactsUtil = require('../../db-utilitys/contacts')
const auth = require('../../db-utilitys/auth')
const contacts = express.Router()

contacts.use((req, res, next) => {
    next()
})

contacts.get('/',auth.isAuthorized, contactsUtil.getContacts, (req, res) => { })

contacts.get('/getAll', auth.isAuthorized, contactsUtil.getAllContacts, (req, res) => { })

contacts.get('/contact/:id',auth.isAuthorized , contactsUtil.getSingleContact, (req, res, next) => { })

contacts.get('/search/:query/:searchParam',auth.isAuthorized, contactsUtil.findcontact, (req, res) => { })

contacts.post('/addContact', auth.isAuthorizedPost, contactsUtil.addContact, (req, res) => { })

contacts.post('/editContact', auth.isAuthorizedPost, contactsUtil.editContact, (req, res) => { })

contacts.delete('/deleteContact/:id', auth.isAuthorized, contactsUtil.deleteContact, (req, res) => {})

module.exports = contacts