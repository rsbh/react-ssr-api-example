const express = require('express')
const rickAndMorty = require('./data/rick_and_morty.json')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send("Node api server for react-ssr App")
})

app.get('/rick-and-morty', (req, res)=>{
  res.send(rickAndMorty)
})

app.listen(PORT, () => {
  console.log("server is running on port :",PORT)
})