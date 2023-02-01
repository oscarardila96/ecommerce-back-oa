const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return orders.init(sequelize, DataTypes);
}

class orders extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      total_price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      type: {
        type: DataTypes.ENUM("pending", "completed"),
        allowNull: true,
        defaultValue: "pending"
      }
    }, {
      sequelize,
      tableName: 'orders',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "orders_pkey",
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
 *     createOrder:
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
