const { getUsersProductsInCart, getUsersOrders } = require("../controllers/users.controller");
const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/:id/productsInCart", authMiddleware, getUsersProductsInCart);
router.get("/:id/orders", authMiddleware, getUsersOrders);

/**
 * @openapi
 * /api/v1/users/{id}/productsInCart:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Gets all the products the user has added to the cart.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: User ID
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example:
 *                     "username": oscarardila96
 *                     "carts":
 *                       "total_price": 0
 *                       "products_in_carts": 
 *                         "product_id": 1
 *                         "quantity": 2
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Something went wrong
 * /api/v1/users/{id}/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieves all the orders created by the user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: User ID
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example:
 *                     "username": oscarardila96
 *                     "orders":
 *                       "id": 1
 *                       "total_price": 1000
 *                       "user_id": 1
 *                       "type": "pending"
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Something went wrong 
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

module.exports = router;

