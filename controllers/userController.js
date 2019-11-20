const db = require('../db');

module.exports = {

  // Register/create a new user
  registerUser: function( req, res ) {
    const user = new db.User(req.body);
    db.User.create(user)
      .then(function(user){
        res.json(user);
      });
  },

  loginUser: function( req, res ) {
    // 
  },

  // get all users 
  getAllUsers: function( req, res ) {
    // TODO: Return all the users as json data
    res.send("all the users will display here");
  }, 

  // get a single user
  getSingleUser: function( req, res ) {
    res.send(`User ${req.params.id} will display here`);
  },

  updateUser: function( req, res ) {
    res.send(`User ${req.params.id} will be updated here`);
  },

  deleteUser: function( req, res ) {
    res.send(`User ${req.params.id} will be destroyed here`);
  }

}