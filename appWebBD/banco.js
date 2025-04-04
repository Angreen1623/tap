const Sequelize = require("sequelize")
const seq = new Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

seq.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})

const Agendamentos = seq.define("agendamentos", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.TEXT
    }
})

//Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Lucas",
    endereco: "Rua 1",
    bairro: "Centro",
    cep: "12345-678",
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Nenhuma"
})