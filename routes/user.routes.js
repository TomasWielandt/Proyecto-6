const express = require('express');
const router = express.Router();

// const auth = require('../middleware/authorization');

const { readall, readone, create, update, remove } = require('../controllers/user.controller');

router.get("/readall", readall);
router.get("/readone/:id", readone);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/remove/:id", remove);

module.exports = router;