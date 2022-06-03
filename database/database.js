const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','88951130',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;