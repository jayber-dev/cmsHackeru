const mysql = require('mysql2');

function getCostumers(req,res){

    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    console.log(req.query);
    let query = `select * FROM costumers ORDER BY first_name LIMIT 15 OFFSET ${req.query.params}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row)   
    })
    conn.end()  
}

function getSingleCostumer(req,res){
       
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    
    let query = `select * FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 
}

function findCostumer(req,res){
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    console.log(req.params.query);
    console.log(req.query.from);
    let query = `select * FROM costumers WHERE first_name LIKE '%${req.params.query}%' ORDER BY first_name LIMIT 15 OFFSET ${req.query.from}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        console.log(row);
        
        res.json(row)   
    })
    conn.end() 
}

function addCostumer(req,res){
    const data = req.body
    console.log('in add contact db');
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    console.log(data.birthday)

    let query = `INSERT INTO costumers (first_name,last_name,email,phone,state,country,city,street,house_number,zip_code,notes) values ('${data.firstName}','${data.lastName}','${data.email}','${data.phone}','${data.state}','${data.country}','${data.city}','${data.street}','${data.houseNumber}','${data.zipCode}','${data.notes}')`
    conn.execute(query, (err,row,fields)=>{
        if (err) throw err
        console.log(row);  
    })

    conn.end()
}

function deleteCostumer(req,res) {
    console.log('in delete');
    
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    let query = `DELETE FROM costumers WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 
}

function editCostumer(req,res){
    const data = req.body
    console.log(req.body)
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    let query = `UPDATE costumers SET first_name='${data.firstName}', last_name='${data.lastName}', email='${data.email}', phone='${data.phone}', state='${data.state}', country='${data.country}', city = '${data.city}', street = '${data.street}', house_number = '${data.houseNumber}', zip_code = '${data.zipCode}', notes = '${data.notes}' WHERE id= ${data.paramId}`
    conn.execute(query, (err,row,fields) => {
        if (err) throw err
        console.log(row);
    })

    conn.end()
}

exports.editCostumer = editCostumer
exports.deleteCostumer = deleteCostumer
exports.getCostumers = getCostumers
exports.getSingleCostumer = getSingleCostumer
exports.findCostumer = findCostumer
exports.addCostumer = addCostumer