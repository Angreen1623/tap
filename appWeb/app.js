const express = require("express") //importação do módulo do express
const app = express() //Carregando importação na cont app


app.get("/", function(req, res){
    res.send(`Seja bem-vindo ao Node JS!
        <br> <a href='/contato'>contato</a>`)
})

app.get("/contato", function(req, res){
    res.send(`Página de Contato
        <br> <a href='/'>index</a>`)
})

app.get("/produto/:item/:qtd", function(req, res){
    res.send("Produto: " + req.params.item +"<br> Quantidade de itens: " + req.params.qtd)
})

app.get("/html", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
}) //Criando servidor web na porta 8081