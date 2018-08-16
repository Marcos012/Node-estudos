const express = require('express')

const server = express()
var path = require("path");

server
  .get('/', (req, res) => {
    res.send('Hello world')
  })
  .get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  })
  .get('/cadastro-produto', (req, res) => {
    res.sendFile(path.join(__dirname+'/cadastro-produto.html'));
  })

  .listen(3000, () => console.log('Acesse localhost:3000'))
