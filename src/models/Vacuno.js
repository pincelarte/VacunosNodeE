const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vacuno = sequelize.define('Vacuno', {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING
  },
  edad: {
    type: DataTypes.INTEGER
  },
  fechaNacimiento: {       
    type: DataTypes.DATEONLY
  },
  fechaIngreso: {
    type: DataTypes.DATEONLY
  },
  seguimientoVeterinario: {
    type: DataTypes.TEXT
  },
  notas: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'vacunos',
  timestamps: true
});

module.exports = Vacuno;
