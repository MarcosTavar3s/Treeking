const express = require('express');
const router = express.Router();

const corridaController = require('./controllers/corridaController');

router.get('/corrida', corridaController.buscarTodos);
router.get('/corrida/:id', corridaController.buscarUser);
router.post('/registro/', corridaController.inserir);
router.put('/update', corridaController.alterar);
router.delete('/delete/:id', corridaController.apagar);

module.exports = router;