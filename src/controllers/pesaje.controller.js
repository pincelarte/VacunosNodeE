const Pesaje = require('../models/Pesaje');
const Vacuno = require('../models/Vacuno');

// Crear un nuevo pesaje
exports.crearPesaje = async (req, res) => {
  try {
    const { vacunoId, peso, fechaPesaje } = req.body;

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
exports.listarPesajes = async (req, res) => {
  try {
    const pesajes = await Pesaje.findAll({ include: Vacuno });
    res.json(pesajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar pesajes' });
  }
};

// Actualizar un pesaje por ID
exports.actualizarPesaje = async (req, res) => {
  try {
    const { id } = req.params;
    const { peso, fechaPesaje } = req.body;

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
exports.eliminarPesaje = async (req, res) => {
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
