const express = require('express');
const router = express.Router();
const pesajeController = require('../controllers/pesaje.controller');

// Crear un nuevo pesaje
router.post('/', pesajeController.crearPesaje);

// Listar todos los pesajes
router.get('/', pesajeController.listarPesajes);

// Actualizar un pesaje por ID
router.put('/:id', pesajeController.actualizarPesaje);

// Eliminar un pesaje por ID
router.delete('/:id', pesajeController.eliminarPesaje);

module.exports = router;
