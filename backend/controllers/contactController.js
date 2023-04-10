const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler( async (req, res) => {
  res.status(200).json({message: "Get all contacts"});
});

//@desc Create new contacts
//@route  POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required!")
  }
  res.status(201).json({message: "Create Contacts"});
});

//@desc Get contacts
//@route  GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

//@desc Update contacts
//@route  PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

//@desc Delete new contacts
//@route  DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
};