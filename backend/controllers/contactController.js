//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({message: "Get all contacts"});
}

//@desc Create new contacts
//@route  POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The request body is:", req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required!")
  }
  res.status(201).json({message: "Create Contacts"});
};

//@desc Get contacts
//@route  GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({message: `Get Contact for ${req.params.id}`});
};

//@desc Update contacts
//@route  PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({message: `Update Contact for ${req.params.id}`});
};

//@desc Delete new contacts
//@route  DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({message: `Delete Contact for ${req.params.id}`});
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
};