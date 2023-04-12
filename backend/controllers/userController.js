const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
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
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(`User created ${user}`);
  if(user) {
    res.status(201).json({_id: user.id, email: user.email});
  }else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({message: "Register user"});
});

//@desc Login user 
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields ae mandatory");
  };

  const user = await User.findOne({email})

  // Comparing password with hashedpassword
  if(user && (await bcrypt.compare(password, user.password)))
  res.json({message: "Login user"})
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler( async (req, res) => {
  res.json({message: "Current user information"})
});

module.exports = { registerUser, loginUser, currentUser }
