"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("alunos", {
        userId: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      courseId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("alunos");
  },
};
