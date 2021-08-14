const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('byds3praacz7kttpjxa4', 'uxmznzr0m9rlyby4', 'h4nq5NmyvT5K9ey5wTrR', {
    host: 'byds3praacz7kttpjxa4-mysql.services.clever-cloud.com',
    port: 3306,
    dialect: 'mysql'
  });

module.exports = sequelize;