const mysql = require('mysql2');

function getContacts(req,res){

    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    query = `select * FROM contacts ORDER BY first_name LIMIT 15 OFFSET ${req.query.from}`
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
    
    query = `select * FROM contacts WHERE id=${req.params.id}`
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
    query = `select * FROM contacts WHERE first_name LIKE '%${req.params.query}%' ORDER BY first_name LIMIT 15 OFFSET ${req.query.from}`
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

    query = `DELETE FROM contacts WHERE id=${req.params.id}`
    conn.execute(query, (err,row,fields) => {      
        if (err) console.log(err);       
        res.json(row[0])   
    })
    conn.end() 

}

exports.deleteContact = deleteContact
exports.getContacts = getContacts
exports.getSingleContact = getSingleContact
exports.findcontact = findcontact