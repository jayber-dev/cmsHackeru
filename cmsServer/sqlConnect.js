const mysql = require('mysql2/promise');

// require('dotenv').config();

// console.log('im in models');
// // console.log(dotenv.config({path:'./'}));


function connect() {
    conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        
        // insecureAuth: true,
    })
    return conn
}
exports.connect = connect