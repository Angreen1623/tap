const Sequilize = require('sequelize');
const seq = new Sequilize('agendamentos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


//exportando para ser usado em outros arquivos
module.exports = {
    Sequilize: Sequilize, // Sequilize(variável exportada): Sequilize(variável local)
    seq: seq
}