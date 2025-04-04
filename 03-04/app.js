const express = require('express');
const app = express();

const handlebars = require('express-handlebars').engine;

const bodyParser = require('body-parser');

const post = require('./models/post');

app.engine('handlebars', handlebars({ defaultLayout: 'main' })); //configurando motor grafico para handlebars defaultlayout(deine nome da classe matriz)
app.set('view engine', 'handlebars'); //configuração do express apontando pro handlebars

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('primeira_pagina.handlebars');
});

app.post('/cadastrar', function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.data,
        observacoes: req.body.observacoes
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Erro ao criar o post: ' + erro)
    })
});

app.get('/consulta', function(req,res){
    post.findAll().then(function(posts){
        res.render('consulta', {posts:posts});
        console.log(posts);
    }).catch(function(erro){
        res.send('Erro ao listar os posts:' + erro)
    })
});

app.get('/atualizar/:id', function(req,res){
    post.findAll({where: {id: req.params.id}}).then(function(posts){
        res.render('atualizar', {posts:posts});
        console.log(posts);
    }).catch(function(erro){
        res.send('Erro ao listar os posts:' + erro)
    })
});

app.get('/excluir/:id', function(req,res){
    post.destroy({where: {id: req.params.id}}).then(function(){
        res.redirect('/consulta')
    }).catch(function(erro){
        res.send('Erro ao excluir o post: ' + erro)
    })
})

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});

