"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let categories = ["Estilo de Vida","Belleza", "Salud", "Moda"]
    for (let i = 0; i < categories.length; i++) {
      await queryInterface.bulkInsert(
        "category",
        [
          {
            nombre: categories[i],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};
