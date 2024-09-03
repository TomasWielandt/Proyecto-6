const express = require('express');
const router = express.Router();

const auth = require('../middleware/authorization');

const { readall, readone, create, update, remove, verifytoken } = require('../controllers/user.controller');

router.get("/readall", auth, readall);
router.get("/readone/:id", auth, readone);
router.post("/create", auth, create);
router.put("/update/:id", auth, update);
router.delete("/remove/:id", auth, remove);
router.get("/verifytoken", auth, verifytoken);

module.exports = router;