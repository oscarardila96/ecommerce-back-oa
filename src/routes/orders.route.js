const { Router } = require("express");
const { createOrder } = require("../controllers/orders.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, createOrder)

/**
 * @openapi
 * /api/v1/orders:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Creates a new order into app's database.
 *     tags: [Orders]
 *     requestBody:
 *       description: Required fields to create a new product.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/createOrder'
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
 *                   example: Order successfully created
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