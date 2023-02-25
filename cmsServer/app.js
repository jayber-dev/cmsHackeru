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

app.use(session({
  cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
  }),
  secret: 'some-key',
  name: 'cms',
  resave: false,
  saveUninitialized: false,
  
}))

app.use(cors({
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', auth)
app.use('/costumers', costumers)
app.use('/contacts', contacts)


// app.get('/', (req, res) => {
//   res.send('hello')
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

