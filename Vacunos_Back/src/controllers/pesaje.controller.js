const Pesaje = require('../models/Pesaje');
const Vacuno = require('../models/Vacuno');

// Crear un nuevo pesaje
const crearPesaje = async (req, res) => {
  try {
    const { vacunoId, peso, fechaPesaje } = req.body;

    if (!vacunoId || !peso || !fechaPesaje) {
      return res.status(400).json({ message: 'vacunoId, peso y fechaPesaje son requeridos' });
    }
    if (isNaN(peso) || peso <= 0) {
      return res.status(400).json({ message: 'Peso debe ser un número positivo' });
    }

    // Verificar que el vacuno exista
    const vacuno = await Vacuno.findByPk(vacunoId);
    if (!vacuno) {
      return res.status(404).json({ message: 'Vacuno no encontrado' });
    }

    const pesaje = await Pesaje.create({ vacunoId, peso, fechaPesaje });
    res.status(201).json(pesaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el pesaje' });
  }
};

// Listar todos los pesajes
const listarPesajes = async (req, res) => {
  try {
    const pesajes = await Pesaje.findAll({ include: Vacuno });
    res.json(pesajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar pesajes' });
  }
};

// Actualizar un pesaje por ID
const actualizarPesaje = async (req, res) => {
  try {
    const { id } = req.params;
    const { peso, fechaPesaje } = req.body;

    if (peso !== undefined && (isNaN(peso) || peso <= 0)) {
      return res.status(400).json({ message: 'Peso debe ser un número positivo' });
    }

    const pesaje = await Pesaje.findByPk(id);
    if (!pesaje) {
      return res.status(404).json({ message: 'Pesaje no encontrado' });
    }

    await pesaje.update({ peso, fechaPesaje });
    res.json(pesaje);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar pesaje' });
  }
};

// Eliminar un pesaje por ID
const eliminarPesaje = async (req, res) => {
  try {
    const { id } = req.params;

    const pesaje = await Pesaje.findByPk(id);
    if (!pesaje) {
      return res.status(404).json({ message: 'Pesaje no encontrado' });
    }

    await pesaje.destroy();
    res.json({ message: 'Pesaje eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar pesaje' });
  }
};

module.exports = {
  crearPesaje,
  listarPesajes,
  actualizarPesaje,
  eliminarPesaje
};
