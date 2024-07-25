const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.get("/", authController.apiHome);

router.post("/login", authController.login);

router.post("/register/:id", authController.register);

module.exports = router;
