const {Sequelize} = require('sequelize');

const Inatividade = require('../models/inatividade');
const Professor = require('../models/Professor');
const Vinculo = require('../models/vinculo');

const connection = new Sequelize(
    {
    dialect : 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'node',
    define: {
        timestamps: true,
    }
}
);

Inatividade.init(connection);
Professor.init(connection);
Vinculo.init(connection);

connection.sync( {alter: true} );

module.exports = connection;