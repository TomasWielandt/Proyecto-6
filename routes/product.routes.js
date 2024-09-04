const express = require('express');
const router = express.Router();

const auth = require('../middleware/authorization');

const { readAll, readOne, create, update, remove } = require('../controllers/product.controller');

/**
 * @swagger
 * /api/product/create:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: Añade un nuevo producto a la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Iphone12
 *               description:
 *                 type: string
 *                 example: Celular
 *               price:
 *                 type: number
 *                 example: 100000
 *               stock:
 *                 type: number
 *                 example: 10
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Producto creado exitosamente
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
 *                   example: Iphone12
 *                 description:
 *                   type: string
 *                   example: Celular
 *                 price:
 *                   type: number
 *                   example: 100000
 *                 stock:
 *                   type: number
 *                   example: 10
 *       500:
 *         description: Error creando un producto
 */
router.post("/create", auth, create);

/**
 * @swagger
 * /api/product/readall:
 *   get:
 *     summary: Obtener productos
 *     description: Obtener todos los productos de la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
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
 *                     example: Iphone12
 *                   description:
 *                     type: string
 *                     example: Celular
 *                   price:
 *                     type: number
 *                     example: 100000
 *                   stock:
 *                     type: number
 *                     example: 10
 *       500:
 *         description: Error obteniendo los productos
 */
router.get("/readall", auth, readAll);

/**
 * @swagger
 * /api/product/readone/{id}:
 *   get:
 *     summary: Obtener producto
 *     description: Obtener un producto según su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
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
 *                     example: Iphone12
 *                   description:
 *                     type: string
 *                     example: Celular
 *                   price:
 *                     type: number
 *                     example: 100000
 *                   stock:
 *                     type: number
 *                     example: 10
 *       500:
 *         description: Error obteniendo el producto
 */
router.get("/readone/:id", auth, readOne);

/**
 * @swagger
 * /api/product/update/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     description: Actualiza las propiedades del producto.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Iphone12
 *               description:
 *                 type: string
 *                 example: Celular
 *               price:
 *                 type: number
 *                 example: 100000
 *               stock:
 *                 type: number
 *                 example: 10
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
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
 *                   example: Iphone12
 *                 description:
 *                   type: string
 *                   example: Celular
 *                 price:
 *                   type: number
 *                   example: 100000
 *                 stock:
 *                   type: number
 *                   example: 10
 *       500:
 *         description: Error actualizando un producto
 */
router.put("/update/:id", auth, update);
router.delete("/delete/:id", auth, remove);

module.exports = router;