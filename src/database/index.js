
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL.toString(), {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = sequelize;
