const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
app.get('/', (req,res)=>{
  res.send('smoke test')
})

app.listen(PORT, ()=>{
  console.log('PORT', PORT);
})