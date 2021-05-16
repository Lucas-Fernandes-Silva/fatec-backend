const express = require('express');
const connection = require('./database/sequelize')

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true}));

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({server: 'running'}); 
});

routes.get('/users/:user_id', (request, response) => {
    const user_id = request.params.user_id;
    console.log(user_id);

    return response.json({user: user_id});
})
server.use(routes);

server.listen(3333, ()=> {
    console.log({
        server: "running"
    })
});

module.exports = server;