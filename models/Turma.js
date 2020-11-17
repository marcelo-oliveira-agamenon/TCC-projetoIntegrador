const { Model, DataTypes } = require("sequelize");

class Turma extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        section: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        room: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },

        state: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Turma;
