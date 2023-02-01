const { Router } = require("express");
const { getAvailableProducts, createProduct } = require("../controllers/products.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/available", authMiddleware, getAvailableProducts);
router.post("/", authMiddleware, createProduct);

/**
 * @openapi
 * /api/v1/products/available:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieves all the products available in stock.
 *     tags: [Products]
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
 *                     "id": 1
 *                     "name": TV
 *                     "price": 200
 *                     "available_qty": 5
 *                     "image_url": "https://aaaa.com"
 *                     "user":
 *                     "orders":
 *                       "username": "oscarardila96"
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
 * /api/v1/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Creates a new product into app's database.
 *     tags: [Products]
 *     requestBody:
 *       description: Required fields to create a new product.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/createProduct'
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
 *                   example: Product successfully created
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