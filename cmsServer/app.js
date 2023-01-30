const express = require('express')
const cors = require('cors')
const app = express()
const auth = require('./auth/auth')

const port = 3000

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/auth', auth)

app.post('/', (req, res) => {
  console.log('hello from login');
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

