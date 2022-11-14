const db = require('../utils/database');
const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field:'user_id'
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field:'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field:'last_name'
  },
  password: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
}, {
  timestamps: true,
});


module.exports = Users;