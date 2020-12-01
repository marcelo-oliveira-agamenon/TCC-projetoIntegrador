const { Model, DataTypes } = require("sequelize");

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },

        courseId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Aluno;
