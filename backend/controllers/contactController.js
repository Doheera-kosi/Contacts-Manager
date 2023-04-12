const asyncHandler = require("express-async-handler");

const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler( async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
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

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

//@desc Get contacts
//@route  GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found!")
  }
  res.status(200).json(contact);
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