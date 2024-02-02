const express = require("express");
const router = express.Router();

const authController = require("../controllers/AuthController");

router.post("/user-login", authController.post_user_login);
router.post("/user-logout", authController.post_user_logout);

module.exports = router;