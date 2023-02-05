const express = require('express');
const costumersUtil = require('../../db-utilitys/costumers')
const costumers = express.Router()

costumers.use((req, res, next) => {
    next()
})
costumers.get('/',costumersUtil.getCostumers, (req,res) => {  
    return res.json(req.body)
})

costumers.get('/costumer/:id', costumersUtil.getSingleCostumer,(req,res,next) =>{})


module.exports = costumers;