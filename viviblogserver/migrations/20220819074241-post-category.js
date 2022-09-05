'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('post', {
      fields: ['idcategory'],
      type: 'foreign key',
      name: 'post-category',
      references: {
        table: 'category',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('post', {
      fields: ['idcategory'],
      type: 'foreign key',
      name: 'post-category',
      references: {
        table: 'category',
        field: 'id'
      }
    })
  }
};
