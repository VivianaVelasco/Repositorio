'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('post', {
      fields: ['iduser'],
      type: 'foreign key',
      name: 'post-user',
      references: {
        table: 'user',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addConstraint('post', {
      fields: ['iduser'],
      type: 'foreign key',
      name: 'post-user',
      references: {
        table: 'user',
        field: 'id'
      }
    })
  }
};
