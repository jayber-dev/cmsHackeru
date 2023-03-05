const mysql = require('mysql2');

function makeConnection() {
    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    return conn
}


function getAllContacts(req, res) {

    const conn = makeConnection()

    let query = `select * FROM contacts ORDER BY first_name`
    conn.execute(query, (err, row, fields) => {
        if (err) console.log(err);
        res.json(row)
    })
    conn.end()
}

function getContacts(req, res) {
    const conn = makeConnection()
    console.log(req.query);
        
    let query = `select * FROM contacts ORDER BY first_name LIMIT 15 OFFSET ${req.query.params}`
    conn.execute(query, (err, row, fields) => {
        if (err) console.log(err);
        res.json(row)
    })
    conn.end()
}

function getSingleContact(req, res) {
    const conn = makeConnection()

    let query = `select * FROM contacts WHERE id=${req.params.id}`
    conn.execute(query, (err, row, fields) => {
        if (err) console.log(err);
        res.json(row[0])
    })
    conn.end()
}

function findcontact(req, res) {
    const conn = makeConnection()

    let query = `select * FROM contacts WHERE first_name LIKE '%${req.params.query}%' ORDER BY first_name LIMIT 15 OFFSET ${req.query.params}`
    conn.execute(query, (err, row, fields) => {
        if (err) console.log(err);
        res.json(row)
    })

    conn.end()
}

function deleteContact(req, res) {
    const conn = makeConnection()

    let query = `DELETE FROM contacts WHERE id=${req.params.id}`
    conn.execute(query, (err, row, fields) => {
        if (err) console.log(err);
        res.json(row[0])
    })
    conn.end()
    res.sendStatus(200)
}

function addContact(req, res) {
    const conn = makeConnection()
    let query = `INSERT INTO contacts (first_name,last_name,email,phone,birthday,state,country,city,street,house_number,zip_code) values ('${req.body.firstName}','${req.body.lastName}','${req.body.email}','${req.body.phone}','${req.body.birthday}','${req.body.state}','${req.body.country}','${req.body.city}','${req.body.street}','${req.body.houseNumber}','${req.body.zipCode}')`
    conn.execute(query, (err, row, fields) => {
        if (err) console.log(err)
        res.json({ "log": "userUpdated" })
    })

    conn.end()
    res.sendStatus(200)
}

function editContact(req, res) {
    const data = req.body
    const conn = makeConnection()

    let query = `UPDATE contacts set first_name='${data.firstName}', last_name='${data.lastName}', email='${data.email}', phone='${data.phone}', birthday='${data.birthday}', state='${data.state}', country='${data.country}', city = '${data.city}', street = '${data.street}', house_number = '${data.houseNumber}', zip_code = '${data.zipCode}' WHERE id= ${data.paramId}`

    conn.execute(query, (err, row, fields) => {
        if (err) throw err
    })
    
    conn.end()
    res.sendStatus(200)
}

exports.editContact = editContact
exports.deleteContact = deleteContact
exports.getContacts = getContacts
exports.getSingleContact = getSingleContact
exports.findcontact = findcontact
exports.addContact = addContact
exports.getAllContacts = getAllContacts