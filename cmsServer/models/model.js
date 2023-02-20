// const costumers = require('./costumers.json')
// const contacts = require('./contact (1).json')
// const mysql = require('mysql2/promise');
// require('dotenv').config({path:'C:\\Users\\evgenyber\\Desktop\\development folder\\myProjects\\cmsHackeruFront\\cmsServer\\.env'});

// require('dotenv').config();

// console.log('im in models');



// const conn = mysql.createConnection({
//         host: process.env.HOST,
//         user: process.env.USER,
//         database: process.env.DATABASE,
//         password: process.env.PASSWORD,
        
//         insecureAuth: true,
//     })

// const conn = mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root',
//         database: 'cmsHackeru',
//         password: '',
        
//         insecureAuth: true,
//     })

// conn.then(conn => {
//     conn.query(`create table IF NOT EXISTS users (id int,email varchar(255),password varchar(255))`); 

//     conn.query('create table IF NOT EXISTS costumers (id int AUTO_INCREMENT,last_name varchar(255),first_name varchar(255),email varchar(255),phone varchar(255),state varchar(255),country varchar(255),city varchar(255),street varchar(255),house_number varchar(10),zip_code int(10),notes longtext, PRIMARY KEY (id))')

//     conn.query('create table IF NOT EXISTS contacts (id int AUTO_INCREMENT,last_name varchar(255),first_name varchar(255),age INT,email varchar(255),phone varchar(255), PRIMARY KEY (id))')

    
// });


// for(let i of costumers) {
//     // console.log(i);
//     let p =""
//     let m = ""
//     let c = ''
    
//     // console.log('im done');
//     if(i.last_name != null) {
//         m = i.last_name.replace("'","s")
//     } else {
//         m = i.last_name
//     }
//     if(i.state != null) {
//         p = i.state.replace("'","s")
//     } else {
//         p = i.state
//     }

//     if(i.street != null) {
//         c = i.street.replace("'","s")
//     } else {
//         c = i.street
//     }
    
    // conn.then(conn => {
    //     conn.execute(`INSERT INTO costumers (last_name,first_name,email,phone,state,country,city,street,house_number,zip_code,notes) VALUES ('${i.first_name}','${i.last_name}','${i.email}','${i.phone}','${i.state}','${i.country}','${i.city}','${i.street}','${i.house_number}','${i.zip_code}','${i.notes}')`)     
    // })
    // conn.then(conn => {
    // conn.execute(`INSERT INTO contacts (last_name,first_name,email,phone,birthday,state,country,city,street,house_number,zip_code) VALUES ('${m}','${i.first_name}','${i.email}','${i.phone}','${i.birthday}','${p}','${i.country}','${i.city}','${c}','${i['house number']}','${i['zip code']}')`)     
    // })
    console.log('another one done');
    
    
// }







