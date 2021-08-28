'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('categorias', { 
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
   },
   nome: {
     type: Sequelize.STRING,
     allowNull: false
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
   await queryInterface.dropTable('categorias');
    
  }
};
