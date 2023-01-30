const mysql = require('mysql');
const { options } = require('../auth/auth');
require('dotenv').config({path:'../.env'});

console.log('im in models');
// console.log(dotenv.config({path:'./'}));

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    // insecureAuth: true,
})
conn.connect()

conn.query(`create table IF NOT EXISTS users (id int,email varchar(255),password varchar(255))`); 

conn.query('create table IF NOT EXISTS costumers (id int AUTO_INCREMENT,last_name varchar(255),first_name varchar(255),email varchar(255),phone varchar(255),state varchar(255),country varchar(255),city varchar(255),street varchar(255),house_number varchar(10),zip_code int(10),notes longtext, PRIMARY KEY (id))')

conn.query('create table IF NOT EXISTS contacts (id int AUTO_INCREMENT,last_name varchar(255),first_name varchar(255),age INT,email varchar(255),phone varchar(255), PRIMARY KEY (id))')

conn.query('SELECT * FROM users WHERE id=1', (err,row,fields) => {
    if (err) throw err

    console.log(row[0]['email']);
})

conn.end()

// module.exports = conn