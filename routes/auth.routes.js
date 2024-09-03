const express = require('express');
const router = express.Router();

const { register, logIn } = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/user/register:
 *   post:
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
router.post("/login", logIn);

module.exports = router;