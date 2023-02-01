const express = require('express');
const costumersUtil = require('../../db-utilitys/costumers')
const costumers = express.Router()

costumers.use((req, res, next) => {
    next()
})
costumers.get('/',costumersUtil.getCostumers, (req,res) => {
    console.log('in costumers');
    
    
    return res.json(req.body)
})



module.exports = costumers;