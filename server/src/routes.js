const express = require('express');

const AtendimentoController = require('./controllers/AtendimentoController');




const routes = express.Router();    

routes.get('/atendimento', AtendimentoController.index);
routes.get('/atendimento/:id', AtendimentoController.one);
routes.post('/atendimento' , AtendimentoController.create);
routes.put('/atendimento/:id' , AtendimentoController.edit);
routes.delete('/atendimento/:id' , AtendimentoController.delete);


module.exports = routes;    