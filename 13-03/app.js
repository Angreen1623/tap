const express = require('express');
const app = express();

const handlebars = require('express-handlebars').engine;

const bodyParser = require('body-parser');

const post = require('./models/post');

app.engine('handlebars', handlebars({ defaultLayout: 'main' })); //configurando motor grafico para handlebars defaultlayout(deine nome da classe matriz)
app.set('view engine', 'handlebars'); //configuração do express apontando pro handlebars

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json)

app.get('/', (req, res) => {
    res.render('primeira_pagina.handlebars');
});

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});

