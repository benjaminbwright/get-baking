const express = require('express');
const router = express.Router();

const auth = require('../../services/authenticationService');
const userController = require('../../controllers/userController');

// Create new user
// this is used during the registration process
// TODO: protect this route so only admins new users can create a new user
router.post('/', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

// Get all users
// TODO: protect this route only for admins
router.get('/', auth.verifyToken, userController.getAllUsers);

// Get a single user
// TODO: protect this route for authenticated users and/or admins
// authenticated user can only get their own user information
router.get('/:id', userController.getSingleUser);

// update a user
// TODO: protect this route for authenticated users and/or admins
// authenticated users can only update their own information
router.put('/:id', userController.updateUser);

// delete a user
// TODO: protect this route for authenticated users and/or admins
// authenticated users can only delete their own infomation
router.delete('/:id', userController.deleteUser);

module.exports = router;