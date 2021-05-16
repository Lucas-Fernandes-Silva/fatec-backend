const express = require('express');

const ProfessorController = require('./controllers/ProfessorController'); 

const routes = express.Router();

routes.get('/professor', ProfessorController.index);
routes.get('/professor', ProfessorController.show);
routes.post('/professor', ProfessorController.store);
routes.delete('/professor/:professorId',  ProfessorController.delete);
routes.put('/professor/:professorId', ProfessorController.update);


module.exports = routes;