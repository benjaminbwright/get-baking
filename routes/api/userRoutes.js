const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

// Create new user
// this is used during the registration process
// TODO: protect this route so only admins new users can create a new user
router.post('/', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

// Get all users
// TODO: protect this route only for admins
router.get('/', userController.getAllUsers);

// Get a single user
// TODO: protect this route for authenticated users and/or admins
// authenticated user can only get their own user information
router.get('/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will display here`);
});

// update a user
// TODO: protect this route for authenticated users and/or admins
// authenticated users can only update their own information
router.put('/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will be updated here`);
});

// delete a user
// TODO: protect this route for authenticated users and/or admins
// authenticated users can only delete their own infomation
router.delete('/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will be destroyed here`);
});

module.exports = router;