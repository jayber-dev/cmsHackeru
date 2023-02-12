const { query } = require('express');
const { json } = require('express/lib/response');
const mysql = require('mysql2');

function getContacts(req,res){

    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    console.log(req.query);
    let query = `select * FROM contacts ORDER BY first_name LIMIT 15 OFFSET ${req.query.params}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row)   
    })
    conn.end()  
}

function getSingleContact(req,res){
       
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    
    let query = `select * FROM contacts WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 
}

function findcontact(req,res){
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })
    console.log(req.params.query);
    console.log(req.query.from);
    let query = `select * FROM contacts WHERE first_name LIKE '%${req.params.query}%' ORDER BY first_name LIMIT 15 OFFSET ${req.query.from}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        console.log(row);
        
        res.json(row)   
    })
    conn.end() 
}

function deleteContact(req,res) {
    console.log('in delete contact');
    
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    let query = `DELETE FROM contacts WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 

}

function addContact(req,res){
    const data = req.body
    console.log('in add contact db');
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    console.log(data.birthday)

    let query = `INSERT INTO contacts (first_name,last_name,email,phone,birthday,state,country,city,street,house_number,zip_code) values ('${data.firstName}','${data.lastName}','${data.email}','${data.phone}','${data.birthday}','${data.state}','${data.country}','${data.city}','${data.street}','${data.houseNumber}','${data.zipCode}')`
    conn.execute(query, (err,row,fields)=>{
        if (err) throw err
        console.log(row);  
    })

    conn.end()

    res.sendStatus(200)
}

function editContact(req,res){
    const data = req.body
    console.log(req.body)
    console.log('im the Data \n', data)
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    let query = `UPDATE contacts set first_name='${data.firstName}', last_name='${data.lastName}', email='${data.email}', phone='${data.phone}', birthday='${data.birthday}', state='${data.state}', country='${data.country}', city = '${data.city}', street = '${data.street}', house_number = '${data.houseNumber}', zip_code = '${data.zipCode}' WHERE id= ${data.paramId}`
    conn.execute(query, (err,row,fields) => {
        if (err) throw err
        console.log(row);
        
    })

    conn.end()
}

exports.editContact = editContact
exports.deleteContact = deleteContact
exports.getContacts = getContacts
exports.getSingleContact = getSingleContact
exports.findcontact = findcontact
exports.addContact = addContact