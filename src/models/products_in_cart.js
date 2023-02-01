const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products_in_cart.init(sequelize, DataTypes);
}

class products_in_cart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cart',
          key: 'id'
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'products_in_cart',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "products_in_cart_pkey",
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
 *     productsInCart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 2
 *         cart_id:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 3
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

//{"product_id": 1, "cart_id": 1, "quantity": 2}
