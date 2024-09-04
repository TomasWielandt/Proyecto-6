const express = require('express');
const router = express.Router();

const { register, logIn } = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registrar un nuevo usuario
 *     description: Añade un nuevo usuario a la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan
 *               username:
 *                 type: string
 *                 example: juan@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234
 *               active:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 66d746c5e11b520166de301k
 *                 name:
 *                   type: string
 *                   example: Juan
 *                 username:
 *                   type: string
 *                   example: juan@gmail.com
 *                 password:
 *                   type: string
 *                   example: 1234
 *                 active:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Error al dar de alta al usuario
 */
router.post("/register", register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Iniciar sesión
 *     description: Autenticar y autorizar ingreso a la sesión del usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: juan@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkNzQ2YzVlMTFiNTIwMTY2ZGUzMDFmIn0sImlhdCI6MTcyNTM4NDUwOCwiZXhwIjoxNzI4OTg0NTA4fQ.6oYXp4fYFKYq9qiVH1i29USDipKQvLkqLKtpymR8k0g
 *       500:
 *         description: Error al iniciar sesión del usuario
 */
router.post("/login", logIn);

module.exports = router;