const express = require('express');
const router = express.Router();

// TODO: move to api routes folder
// TODO: create user CRUD

// Create new user
router.post('/api/users', ( req , res) => {
  const user = new db.User(req.body);
  db.User.create(user)
    .then(function(user){
      res.send("user inserted");
    });
});

// Get all users
router.get('/', ( req, res ) => {
  res.send("all the users will display here");
});

// Get a single user
router.get('/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will display here`);
});

// update a user
router.put('/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will be updated here`);
});

// delete a user
router.delete('/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will be destroyed here`);
});

module.exports = router;