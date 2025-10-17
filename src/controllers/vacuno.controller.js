const Vacuno = require('../models/Vacuno');

// Crear un vacuno
const crearVacuno = async (req, res) => {
  try {
    const vacuno = await Vacuno.create(req.body);
    res.status(201).json(vacuno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear vacuno' });
  }
};

// Listar todos los vacunos
const listarVacunos = async (req, res) => {
  try {
    const vacunos = await Vacuno.findAll();
    res.json(vacunos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al listar vacunos' });
  }
};

// Actualizar un vacuno por ID
const actualizarVacuno = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Vacuno.update(req.body, { where: { id } });
    if (actualizado) {
      const vacuno = await Vacuno.findByPk(id);
      res.json(vacuno);
    } else {
      res.status(404).json({ mensaje: 'Vacuno no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar vacuno' });
  }
};

// Eliminar un vacuno por ID
const eliminarVacuno = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Vacuno.destroy({ where: { id } });
    if (eliminado) {
      res.json({ mensaje: 'Vacuno eliminado' });
    } else {
      res.status(404).json({ mensaje: 'Vacuno no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar vacuno' });
  }
};

module.exports = {
  crearVacuno,
  listarVacunos,
  actualizarVacuno,
  eliminarVacuno
};
