const Sequelize = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
}

class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "users_username_key"
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "users_email_key"
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      hooks: {
        beforeCreate: (user, options) => {
          const { password } = user;
          const hash = bcrypt.hashSync(password, 10);
          user.password = hash
        }
      },
      sequelize,
      tableName: 'users',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "users_email_key",
          unique: true,
          fields: [
            { name: "email" },
          ]
        },
        {
          name: "users_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "users_username_key",
          unique: true,
          fields: [
            { name: "username" },
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
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: oscar123
 *         email:
 *           type: string
 *           example: oscar@gmail.com
 *         password:
 *           type: string
 *           example: root123
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: oscarardila96@gmail.com
 *         password:
 *           type: string
 *           example: root123
 *     loginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: oscar123
 *         email: 
 *           type: string
 *           example: oscar123@aol.com
 *         password: 
 *           type: string
 *           example: root123
 *         id:
 *           type: integer
 *           example: 2
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
