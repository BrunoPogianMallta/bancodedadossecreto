const Sequelize = require ('sequelize');

const Tasks = new Sequelize('task',{
    id:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: Sequelize.TEXT,
    allowNull: false,
});

 

   
User.sync({ alter: true });

module.exports = Tasks; 




module.exports = User;