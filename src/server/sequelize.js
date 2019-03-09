const Sequelize = require('sequelize');
const UsersModel = require('./models/users');

const sequelize = new Sequelize('pathdb', null, null, {
  dialect: 'sqlite',
  storage: './src/server/db/pathdb.db'
});

const Users = UsersModel(sequelize, Sequelize);

module.exports = {
  Users
};
