const Sequelize = require ('sequelize');
const db = require ('../database')

const Tasks = db.define('task',{
    id:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
    type:Sequelize.TEXT,
    allowNull: false,
    }
})

 

   
Tasks.sync({ alter: true });

module.exports = Tasks; 

