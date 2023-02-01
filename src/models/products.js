const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products.init(sequelize, DataTypes);
}

class products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "products_name_key"
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      available_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'products',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "products_name_key",
          unique: true,
          fields: [
            { name: "name" },
          ]
        },
        {
          name: "products_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
};

/**
 * @openapi
 * components:
 *   schema:
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: TV
 *         price:
 *           type: integer
 *           example: 200
 *         available_qty:
 *           type: integer
 *           example: 5
 *         user_id:
 *           type: integer
 *           example: 1
 *         image_url:
 *           type: string
 *           example: https://aaaa.com
 */