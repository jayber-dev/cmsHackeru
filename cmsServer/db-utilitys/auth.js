const connect = require('../sqlConnect').connect
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const crypto = require("crypto-js");
const { query } = require('express');


// ------------------ declerations ------------------
const saltRounds = 10;


// ------------------------- encryption decryption functions use functions -------------------------------
async function checkPasswordMatch(plainPass, hashPass) {
    return await bcrypt.compare(plainPass,hashPass)   
}



function encryptToken(userData){
    
    toEncrypt = {
        id:userData.id,
        email:userData.email
    }
    return crypto.AES.encrypt(JSON.stringify(userData), process.env.SECRET_KEY).toString()
}

function decryptToken(cipher){
    try {
        bytes  = crypto.AES.decrypt(cipher, process.env.SECRET_KEY);
        return JSON.parse(bytes.toString(crypto.enc.Utf8));
    } catch {
        return {id:-1}
    }
    
}

// -------------------------------------- MYSQL connection function------------------------------

function makeConnection(){
    // connection to remote db server with connection timeout have to connect for each request
    // will use pooling in the future

    const conn = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
    })

    return conn
}


// ---------------------------------- End points handler functions ---------------------------------------------

function login (req,res,next){
    const conn = makeConnection()
    conn.then((conn) => {
        conn.execute('select id,email,password FROM users where email=?',[req.body.email]).then((data) => {     
            checkPasswordMatch(req.body.password, data[0][0]['password']).then(match => {
                if(match) {
                    const token = encryptToken(data[0][0])       
                    const query = `UPDATE users SET token='${token}' WHERE id=${data[0][0]['id']}`
                    conn.execute(query).then((row,fields) =>{                       
                        res.json({"isLogged":true,"t":token})
                    }).catch(err => {}) 
                          
                } else {
                    res.json({"isLogged":false,"message":"wrong password"})                
                }
            }).catch(err =>{})  
        }).catch(err => {
            res.json({message:"Email Does Not Exist"})           
        })
    })  
}


function googleLogin(req,res) {
    const token = encryptToken(req.body)
    const conn = makeConnection()
    
    conn.then(conn => {
        const query = `INSERT INTO google_users (id,email,token) values ('${req.body.id}','${req.body.email}','${token}')`
        conn.execute(query).then(res =>{}).catch(err => {
            
            const query = `UPDATE google_users set token='${token}' WHERE id = ${req.body.id}`
            conn.execute(query).then(res =>{
                 
            }).catch(err =>{                
            })
            
        })
    })
    res.json({ "isLogged": true,"t":token })
}

function signup(req,res) {
    bcrypt.genSalt(saltRounds, (err,salt) => {
        bcrypt.hash(req.body.password, salt, (err,hash) =>{ 
            const conn = makeConnection()
            conn.then((conn) =>{
            let query = `INSERT INTO users (email,password) values ('${req.body.email}','${hash}')`
                conn.execute(query).then(data => {
                    res.json({message:"registered"})
                }).catch((err) => {
                    res.json({message:"Email already exist's"})    
                })     
            })
            conn.then(conn => {
                conn.end()
            })
        })
    }) 
}

function logout(req,res,next){ 
    const token = decryptToken(req.body.t)
    const conn = makeConnection()

    conn.then(conn => {
        let regularQuery = `UPDATE users SET token = NULL WHERE id = ${token['id']}`
        let googleQuery = `UPDATE google_users SET token = NULL WHERE id = ${token['id']}`

        conn.execute(regularQuery).then(res => {}).catch(err =>{})
        conn.execute(googleQuery).then(res=>{}).catch(err =>{})
        conn.end()
    })
    res.send({"isLogged":false,})
}

function isAuthenticated (req, res, next) {
    
    const token = decryptToken(req.body.t)
    const conn = makeConnection()

    conn.then(conn => {
        const query = `SELECT id,email,token FROM users WHERE id=${token['id']} UNION ALL SELECT id,email,token FROM google_users WHERE id=${token['id']}`
        conn.execute(query).then(result =>{
            if(result[0][0]){
                return res.json({"isLogged":true})
            }
        }).catch(err => {
            return res.sendStatus(401)
        })
    })    
}

function isAuthorizedPost(req,res,next){
    const token = decryptToken(req.body.t)
    const conn = makeConnection()

    conn.then(conn => {
        const query = `SELECT id,email,token FROM users WHERE id=${token['id']} UNION ALL SELECT id,email,token FROM google_users WHERE id=${token['id']}`
        conn.execute(query).then(result =>{
            if(result[0][0]){
                next()
            }
        }).catch(err => {
            return res.sendStatus(401)
        })
    }) 
}

function isAuthorized(req, res, next) {
    // method to check if authorized to make get request
    const token = decryptToken(req.query.t)
    const conn = makeConnection()

    if(token['id'] === -1){
        res.sendStatus(401)
    } else {
        conn.then(conn => {
            const query = `SELECT id,email,token FROM users WHERE id=${token['id']} UNION ALL SELECT id,email,token FROM google_users WHERE id=${token['id']}`
            conn.execute(query).then(result =>{
                if(result[0][0]){
                    next()
                }
            }).catch(err => {
                console.log(err);
            })
        })
    }
      
}

exports.isAuthorizedPost = isAuthorizedPost
exports.isAuthenticated = isAuthenticated
exports.isAuthorized = isAuthorized
exports.login = login
exports.logout = logout
exports.signup = signup
exports.googleLogin = googleLogin