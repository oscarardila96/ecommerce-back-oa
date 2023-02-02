const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products_in_order.init(sequelize, DataTypes);
}

class products_in_order extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
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
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM("purchased", "not_purchased"),
        allowNull: true,
        defaultValue: "not_purchased"
      }
    }, {
      sequelize,
      tableName: 'products_in_order',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "products_in_order_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  }
}
