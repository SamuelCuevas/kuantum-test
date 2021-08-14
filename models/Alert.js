const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Alert extends Model {}
Time.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  times_saved: DataTypes.STRING
}, { sequelize, modelName: 'alert' });


module.exports = Alert;