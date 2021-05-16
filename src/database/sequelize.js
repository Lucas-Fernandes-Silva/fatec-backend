const {Sequelize} = require('sequelize');

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

connection.sync( {alter: true} );

module.exports = connection;