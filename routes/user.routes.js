const express = require('express');
const router = express.Router();

const auth = require('../middleware/authorization');

const { readAll, readOne, create, update, remove, verifyToken } = require('../controllers/user.controller');

/**
 * @swagger
 * /api/user/readall:
 *   get:
 *     summary: Obtener usuarios
 *     description: Obtener todos los usuarios de la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuarios obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 66d746c5e11b520166de301k
 *                   name:
 *                     type: string
 *                     example: Juan
 *                   username:
 *                     type: string
 *                     example: juan@gmail.com
 *                   active:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Error obteniendo los usuarios
 */
router.get("/readall", auth, readAll);

/**
 * @swagger
 * /api/user/readone/{id}:
 *   get:
 *     summary: Obtener usuario
 *     description: Obtener un usuario según su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 66d746c5e11b520166de301k
 *                   name:
 *                     type: string
 *                     example: Juan
 *                   username:
 *                     type: string
 *                     example: juan@gmail.com
 *                   active:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Error obteniendo al usuario
 */
router.get("/readone/:id", auth, readOne);
router.post("/create", auth, create);
router.put("/update/:id", auth, update);
router.delete("/remove/:id", auth, remove);
router.get("/verifytoken", auth, verifyToken);

module.exports = router;