const { Sequelize } = require('sequelize');
const userModel = require('./users-model');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const User = userModel(sequelize, Sequelize);

module.exports = {
  db: sequelize,
  User,
};
