const express = require('express');
const router = express.Router();

const auth = require('../middleware/authorization');

const { readAll, readOne, create, update, remove } = require('../controllers/product.controller');

router.post("/create", auth, create);
router.get("/readall", auth, readAll);
router.get("/readone/:id", auth, readOne);
router.put("/update/:id", auth, update);
router.delete("/delete/:id", auth, remove);

module.exports = router;