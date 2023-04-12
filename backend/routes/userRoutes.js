const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();

// endpoint for registration
router.post("/register", registerUser);

// endpoint for login
router.post("/login", loginUser);

// endpoint for current user info
router.get("/current", currentUser);

module.exports = router;
