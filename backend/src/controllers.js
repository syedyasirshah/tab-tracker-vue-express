exports.registerUser = (req,res) =>{
  res.send({
    message:`Hello ${req.body.email}, your user has been registered.`
  })
}