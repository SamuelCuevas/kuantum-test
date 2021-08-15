const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Device extends Model {}
Device.init({
  uuid: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  alerts_config: DataTypes.JSON,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, { sequelize, freezeTableName: true, modelName: 'device' });


module.exports = Device;