module.exports = (sequelize, type) => sequelize.define('Users', {
  id: {
    type: type.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  Login: {
    type: type.TEXT,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: type.TEXT,
    allowNull: false,
  },
  UserName: {
    type: type.TEXT,
    allowNull: false,
  }
}, {
  timestamps: false
});
