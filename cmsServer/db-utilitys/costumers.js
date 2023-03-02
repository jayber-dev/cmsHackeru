const mysql = require('mysql2');

function makeConnection(){
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    return conn
}


function getCostumers(req,res){
    const conn = makeConnection()

    let query = `select * FROM costumers ORDER BY first_name LIMIT 15 OFFSET ${req.query.params}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row)   
    })
    conn.end()  
}

function getAllCostumers(req,res){    
    const conn = makeConnection()

    let query = `select * FROM costumers ORDER BY first_name`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row)   
    })
    conn.end() 
}

function getSingleCostumer(req,res){
    const conn = makeConnection()
    
    let query = `select * FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json({data:row[0],"isLogged":true})   
    })
    conn.end() 
}

function findCostumer(req,res){
    const conn = makeConnection()

    let query = `select * FROM costumers WHERE ${req.params.searchParam} LIKE '%${req.params.query}%' ORDER BY first_name LIMIT 15 OFFSET ${req.query.params}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);              
        res.json(row)   
    })
    conn.end() 
}

function addCostumer(req,res){
    const data = req.body    
    const conn = makeConnection()

    let query = `INSERT INTO costumers (first_name,last_name,email,phone,state,country,city,street,house_number,zip_code,notes) values ('${data.firstName}','${data.lastName}','${data.email}','${data.phone}','${data.state}','${data.country}','${data.city}','${data.street}','${data.houseNumber}','${data.zipCode}','${data.notes}')`
    conn.execute(query, (err,row,fields)=>{
        if (err) console.log(err)
    })

    conn.end()
}

function deleteCostumer(req,res) {    
    const conn = makeConnection()

    let query = `DELETE FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 
}

function editCostumer(req,res){
    const data = req.body    
    const conn = makeConnection()

    let query = `UPDATE costumers SET first_name='${data.firstName}', last_name='${data.lastName}', email='${data.email}', phone='${data.phone}', state='${data.state}', country='${data.country}', city = '${data.city}', street = '${data.street}', house_number = '${data.houseNumber}', zip_code = '${data.zipCode}', notes = '${data.notes}' WHERE id= ${data.paramId}`
    conn.execute(query, (err,row,fields) => {
        if (err) throw err
    })

    conn.end()
}

exports.editCostumer = editCostumer
exports.deleteCostumer = deleteCostumer
exports.getCostumers = getCostumers
exports.getSingleCostumer = getSingleCostumer
exports.findCostumer = findCostumer
exports.addCostumer = addCostumer
exports.getAllCostumers = getAllCostumers