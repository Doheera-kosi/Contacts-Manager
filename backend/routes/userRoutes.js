const express = require("express");

const router = express.router();

// endpoint for registration
router.post("/register", (req, res) => {
  res.json({message: "Register the user"})
});

// endpoint for login
router.post("/login", (req, res) => {
  res.json({message: "Login user"})
});

// endpoint for current user info
router.post("/current", (req, res) => {
  res.json({message: "Current user information"})
});
