const { Router } = require("express");
const { addProductToCart } = require("../controllers/products_in_cart.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, addProductToCart);

/**
 * @openapi
 * /api/v1/productsInCart:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Adds a new product to the user's cart.
 *     tags: [Cart's Products]
 *     requestBody:
 *       description: Required fields to add a new product to the cart.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/productsInCart'
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
 *                   example: Product successfully added to the cart
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