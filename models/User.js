const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        token: {
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

module.exports = User;
