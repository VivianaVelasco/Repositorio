"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      post.belongsTo(models.category, {
        foreignKey: {
          name: "idcategory",
        },
      });
      models.category.hasOne(post, {
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      });
      post.belongsTo(models.user, {
        foreignKey: {
          name: 'iduser'
        }
      })
      models.user.hasOne(post, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      iduser: DataTypes.INTEGER,
      idcategory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
      freezeTableName: true
    }
  );
  return post;
};
