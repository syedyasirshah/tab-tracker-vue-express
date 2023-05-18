const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
const morgan = require('morgan');
 
const app = express();
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/status',(req,res) =>{
  res.send({
    message:'Hello from the server.'
  })
})
const port =  8081; 
app.listen(port,() =>{
  console.log(`App is listening on port ${port}...`)
})