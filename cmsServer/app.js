const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express()
const auth = require('./routes/auth/auth')
const costumers = require('./routes/costumers/costumers')
const contacts = require('./routes/contacts/contacts')
require('./sqlConnect');
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const port = process.env.PORT || 3000

app.enable('trust proxy')

app.use(session({
  cookie: { 
    maxAge: 86400000,
    sameSite:"none",
    secure:true, 
    // httpOnly:true,
    // path:"/" 
  },

    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: process.env.SECRET_KEY,
  name: 'cms',
  resave: false,
  saveUninitialized: false,
  
  
}))

app.use(cors({
  origin:'https://cmshackeru.com',
  allowedHeaders:['Accept','Content-Type','x-requested-with'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials:true,
  
  
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', auth)
app.use('/costumers', costumers)
app.use('/contacts', contacts)


app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

