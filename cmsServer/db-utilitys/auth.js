const session = require('express-session');

const connect = require('../sqlConnect').connect



function login (req,res){
    // console.log(req);
    // connection to remote db server with connection timeout have to connect for each request
    // will use pooling in the future
    // console.log(req.sessions.user = session.Session());
    
    
    const conn = connect()
    conn.then((conn) => {
        conn.execute('select id,email,password FROM users where email=?',[req.body.email]).then((err,data,some) => {
            if(err[0][0]['password'] == req.body.password) {
                req.session.user = req.body.email
                console.log(req.session);
                return res.json({
                    "isLogged":true,
                    "session":`${req.session.user}`})
            } else {
                return res.json({"isLogged":false})                
            }
        })
    })
}

function signup() {

}

function routeGuard(){

}

function logout(req,res,next){
    req.session.user = ''
}

function isAuthenticated (req, res, next) {
    if (req.session.user) {
        res.json({"isLogged": true}) 
        next()
    }

    else next('route')
  }

exports.isAuthenticated = isAuthenticated
exports.login = login
exports.logout = logout