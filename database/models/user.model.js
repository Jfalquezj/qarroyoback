/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      min: {
        args: [4],
        msg: 'Username must be equal or greater than 4',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: {
        args: [4],
        msg: 'Password must be equal or greater than 4',
      },
    },
  },
  name: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  foto: {
    type: DataTypes.STRING,
    unique: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: true,
});

module.exports = User;
