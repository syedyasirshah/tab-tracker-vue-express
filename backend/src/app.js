const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
const morgan = require('morgan');
 
const app = express();
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.post('/register',(req,res) =>{
  res.send({
    message:`Hello ${req.body.email}, your user has been registered.`
  })
})
const port =  8081; 
app.listen(port,() =>{
  console.log(`App is listening on port ${port}...`)
})

module.exports = app;