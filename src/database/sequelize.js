const {Sequelize} = require('sequelize');

//const Inatividade = require('../models/Inatividade');
const Professor = require('../models/Professor');
//const Vinculo = require('../models/Vinculo');

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


Professor.init(connection);

connection.sync( {alter: true} );

module.exports = connection;