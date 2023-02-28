const express = require('express');
const contactsUtil = require('../../db-utilitys/contacts')
const auth = require('../../db-utilitys/auth')
const contacts = express.Router()

contacts.use((req, res, next) => {
    next()
})

contacts.get('/', contactsUtil.getContacts, auth.authGuard, (req, res) => { })

contacts.get('/getAll', auth.authGuard, contactsUtil.getAllContacts, (req, res) => { })

contacts.get('/contact/:id', auth.authGuard, contactsUtil.getSingleContact, (req, res, next) => { })

contacts.get('/search/:query/:searchParam', auth.authGuard, contactsUtil.findcontact, (req, res) => { })

contacts.post('/addContact', auth.authGuard, contactsUtil.addContact, (req, res) => { })

contacts.post('/editContact', auth.authGuard, contactsUtil.editContact, (req, res) => { })

contacts.delete('/deleteContact/:id', auth.authGuard, contactsUtil.deleteContact, (req, res) => {

})

module.exports = contacts