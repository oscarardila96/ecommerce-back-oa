const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();

router.post("/register", register);
router.post("/login", login);

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Creates a new user into app's database.
 *     requestBody:
 *       description: Required fields to create a new user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/register'
 *     tags:
 *       - [Auth]
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
 *                   example: User registered successfully!
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 message:
 *                   type: string
 *                   example: Validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: Logs an user into the app.
 *     requestBody:
 *       description: Required fields to log in an user.
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/login'
 *     tags:
 *       - [Auth]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             $ref: '#/components/schema/loginResponse'
 *       400:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found / Something went wrong / No email or password provided
 */


module.exports = router;