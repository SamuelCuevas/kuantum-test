const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Device = require('./Device');

class Alert extends Model {}
Alert.init({
  uuid: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  registered_value: DataTypes.FLOAT,
  alert_data: DataTypes.JSON,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE

}, { sequelize, freezeTableName: true, modelName: 'alert' });


Alert.Device = Alert.belongsTo(Device);

module.exports = Alert;