/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Reporte = sequelize.define('Reporte', {
  nivelArroyo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nivelBasura: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nivelTrafico: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitud: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  latitud: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: true,
});

module.exports = Reporte;
