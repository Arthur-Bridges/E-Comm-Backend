const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    //id, category_name
    /*
    type = Integer.

Doesn't allow null values.

Set as primary key.

Uses auto increment. */
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //using category_name then set type to string, allowNull = false
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
