const express = require('express');
const router = express.Router();
const vacunoController = require('../controllers/vacuno.controller');

// Crear un vacuno
router.post('/', vacunoController.crearVacuno);

// Listar todos los vacunos
router.get('/', vacunoController.listarVacunos);

// Actualizar un vacuno por ID
router.put('/:id', vacunoController.actualizarVacuno);

// Eliminar un vacuno por ID
router.delete('/:id', vacunoController.eliminarVacuno);

module.exports = router;
