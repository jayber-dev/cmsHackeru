const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express()
const auth = require('./routes/auth/auth')
const costumers = require('./routes/costumers/costumers')
require('./sqlConnect');
const cookieParser = require('cookie-parser') 
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const port = 3000

// app.use(cookieParser())
app.use(session({
  secret: 'my-secret',
  name: 'mySession',
  resave: false,
  saveUninitialized: false,
  maxAge: 3600 * 24 * 60,
}));

app.use(cors({
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  allowedHeaders: 'content-type, accept',
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', auth)
app.use('/costumers', costumers)

// console.log(conn);

app.get('/', (req, res) => {
  console.log('hello from login');
  res.send('Hello World!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

