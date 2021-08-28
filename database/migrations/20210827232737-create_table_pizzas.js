'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('pizzas', { 
     id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
   },
   sabor: {
     type: Sequelize.STRING,
     allowNull: false
   },
   categoria: {
     type: Sequelize.STRING,
     allowNull: false
     
   },
   deleted: {
     type: Sequelize.BOOLEAN,
     allowNull: false,
     defaultValue: 0
   },
   preco: {
     type: Sequelize.DOUBLE,
     allowNull: false,
   }, 
   created_at: {
     type: 'TIMESTAMP',
     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
     allowNull: false
   },
   updated_at: {
     type: 'TIMESTAMP',
     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
     allowNull: false
   }
  });
},


  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('pizzas');
    
  }
};
