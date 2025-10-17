const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Vacuno = require('./Vacuno');

const Pesaje = sequelize.define('Pesaje', {
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fechaPesaje: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  tableName: 'pesajes',
  timestamps: true
});

// Relación: un vacuno tiene muchos pesajes
Vacuno.hasMany(Pesaje, { foreignKey: 'vacunoId', onDelete: 'CASCADE' });
Pesaje.belongsTo(Vacuno, { foreignKey: 'vacunoId' });

// Relación inversa: un pesaje pertenece a un vacuno
Vacuno.hasMany(Pesaje, { foreignKey: 'vacunoId', onDelete: 'CASCADE' });

module.exports = Pesaje;
