'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('pizzas', 'categoria_id', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id'
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('pizzas', 'categoria_id');
   
  }
};
