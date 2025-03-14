const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {  
  res.render('primeira_pagina.handlebars')
})

app.listen(8081, () => {
  console.log('Servidor rodando na porta 8081')
})