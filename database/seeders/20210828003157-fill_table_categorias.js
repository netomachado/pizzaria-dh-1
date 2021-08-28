'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('categorias', [
    { nome: 'Doce' },
    { nome: 'Salgada' }, 
    { nome: 'Vegetariana'}
  ], {});
 
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('categorias', null, {});
    
  }
};
