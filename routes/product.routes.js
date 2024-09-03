const express = require('express');
const router = express.Router();

const auth = require('../middleware/authorization');

const { readAll, readOne, create, update, remove } = require('../controllers/product.controller');

router.get("/readall", auth, readAll);
router.get("/readone/:id", auth, readOne);
router.post("/create", auth, create);
router.put("/update/:id", auth, update);
router.delete("/remove/:id", auth, remove);

module.exports = router;