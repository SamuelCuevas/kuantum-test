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
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE
}, { sequelize, freezeTableName: true, timestamps: false, modelName: 'device' });


module.exports = Device;