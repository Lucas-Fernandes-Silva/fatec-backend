const express = require('express');

//const ProfessorController = require('./controllers/ProfessorController'); 
//const InatividadeController = require('./controllers/InatividadeController'); 
const VinculoController = require('./controllers/VinculoController'); 

const routes = express.Router();

//routes.get('/professor', ProfessorController.index);
//routes.get('/professor', ProfessorController.show);
//routes.post('/professor', ProfessorController.store);
//routes.delete('/professor/:professorId',  ProfessorController.delete);
//routes.put('/professor/:professorId', ProfessorController.update);


//routes.get('/inatividade', InatividadeController.index);
//routes.get('/inatividade', InatividadeController.show);
//routes.post('/inatividade', InatividadeController.store);
//routes.delete('/inatividade/:inatividadeId',  InatividadeController.delete);
//routes.put('/inatividade/:inatividadeId', InatividadeController.update);


routes.get('/vinculo', VinculoController.index);
routes.get('/vinculo', VinculoController.show);
routes.post('/vinculo', VinculoController.store);
routes.delete('/vinculo/:vinculoId',  VinculoController.delete);
routes.put('/vinculo/:vinculoId', VinculoController.update);


module.exports = routes;