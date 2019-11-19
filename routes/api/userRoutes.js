const express = require('express');
const router = express.Router();

const db = require('../../db')

// Create new user
// this is used during the registration process
// TODO: protect this route so only admins new users can create a new user
router.post('/', ( req , res) => {
  const user = new db.User(req.body);
  db.User.create(user)
    .then(function(user){
      res.json(user);
    });
});

// Get all users
// TODO: protect this route only for admins
router.get('/', ( req, res ) => {
  res.send("all the users will display here");
});

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