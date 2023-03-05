const express = require('express');
const costumersUtil = require('../../db-utilitys/costumers')
const auth = require('../../db-utilitys/auth')
const costumers = express.Router()

costumers.use((req, res, next) => {
    next()
})

costumers.get('/',auth.isAuthorized, costumersUtil.getCostumers, (req, res) => { })

costumers.get('/getAll', auth.isAuthorized ,costumersUtil.getAllCostumers, (req, res) => { })

costumers.get('/costumer/:id',auth.isAuthorized ,costumersUtil.getSingleCostumer, (req, res, next) => { })

costumers.get('/search/:query/:searchParam',auth.isAuthorized, costumersUtil.findCostumer, (req, res) => { })

costumers.post('/addCostumer',auth.isAuthorizedPost, costumersUtil.addCostumer, (req, res) => { })

costumers.post('/editCostumer',auth.isAuthorizedPost, costumersUtil.editCostumer, (req, res) => { })

costumers.delete('/deleteCostumer/:id', costumersUtil.deleteCostumer, (req, res) => {})

module.exports = costumers;