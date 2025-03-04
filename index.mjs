import { faker } from '@faker-js/faker';
//const express = require('express')
import express from 'express'
import cors from 'cors'

//arrancar con npm start
const app = express()
app.use(cors())

function createAccount(){
  const nombre=faker.person.fullName();
  const email=faker.internet.email();
  const direccion=faker.location.streetAddress();
  const edad=Number(faker.number.bigInt({min: 18n, max: 100n}));
  return {nombre, email, direccion, edad};
}

function createAccounts(number){
  const accounts=[];
  for (let i=0; i<number; i++){
    accounts.push(createAccount());
  }
  return accounts;
}

const accounts=createAccounts(30);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/accounts', function (req, res) {
  res.json(accounts)
  //res.send('Aquí se listan las cuentas')
  // si llamamos aquí a la función de crear cuentas tendremos datos distintos cada vez que se llame al servidor
})

app.listen(3001,function(){
  console.log('Servidor corriendo en el puerto 3001')
})
