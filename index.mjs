console.log ('Hello, World!');

//const express = require('express')
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/accounts', function (req, res) {
  res.send('Aquí se listan las cuentas')
})

app.listen(3001,function(){
  console.log('Servidor corriendo en el puerto 3001')
})
