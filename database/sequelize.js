/* eslint-disable global-require */
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelizeConfig = require('./config').development;

const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
    logging: true,
  },

);
module.exports = sequelize;
