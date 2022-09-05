'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let names = ["Viviana", "Jennie", "Lisa"]
    let lastnames = ["Velasco", "Kim", "Manoban"]
    let emails = ["vivi@admin.com", "jennierubijane@hotmail.com", "lisa@gmail.com"]
    let passwords = ["vivi123@", "jennie123", "lisaisthemoment123_"]
    let phone_numbers = ["0934232132", "0943231243", "0943235465"]
    for (let i = 0; i < names.length; i++) {
      await queryInterface.bulkInsert(
        "user",
        [
          {
            name: names[i],
            lastname: lastnames[i],
            phone_number: phone_numbers[i],
            email: emails[i],
            password: passwords[i],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
