const { Router } = require("express");
const { makePurchase } = require("../controllers/orders.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/:id", authMiddleware, makePurchase);

/**
 * @openapi
 * /api/v1/orders/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Creates a new order into the app's database, deletes all products from the user's cart and adds the same products to the recently created order.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: User ID
 *     tags: [Orders]
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Purchase successfully completed
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Error
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

module.exports = router;