const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
  const {username, email, password} = req.body;
  if(!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });
  if(userAvailable) {
    res.status(400);
    throw new Error("User registered already")
  }

  // Hash password
  const hashPassword = await bcrypt.hash(password, 10)
  console.log("Hashed Password:", hashPassword);
  res.json({message: "Register user"});
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
  res.json({message: "Login user"})
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler( async (req, res) => {
  res.json({message: "Current user information"})
});

module.exports = { registerUser, loginUser, currentUser }
