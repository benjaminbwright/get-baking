const db = require('../db');
const bcrypt = require('bcrypt');
const auth = require('../services/authenticationService')

const saltRounds = 10;

module.exports = {

  // Register/create a new user
  registerUser: function( req, res ) {
    const user = new db.User(req.body);
    db.User.create(user)
      .then(function(user){
        res.json(user);
      });
  },

  // Login a user
  loginUser: function( req, res ) {
    // get the data from the request body
    const email = req.body.email;
    const password = req.body.password;

    let invalidInputs = false;
    const errors = [];

    // Check for valid email input
    if (!email) {
      errors.push({email: "You must enter a valid email."});
      invalidInputs = true;
    }

    //Check for valid password input
    if (!password) {
      errors.push({password: "You must enter a valid password."});
      invalidInputs = true;
    }

    // Send errors for invalid inputs
    if (invalidInputs) {
      res.status(422).json({
        message: "Incorrect password/email combination",
        errors: errors
      });
    }

    // check the for a user in the database with matching credentials

    // Find user in the database if email and password are present
    if (email && password) {
      db.User.find({email: email})
        .then(function(user) {
          // Make sure a user was returned 
          if (user !== null) {
            bcrypt.compare(password, user.password, function(err, result) {
              // Create a json web token & return it as json.
              auth.getToken(user, function(err, token) {
                if (err) {console.log(err);}
                res.status(200).json({
                  message: "Auth OK",
                  token: token,
                  errors: errors
                });
              });
            });
          } else {
            errors.push({auth: "Auth error - user not found."});
            res.status(404).json({
              message: "Auth error - no match found for email or password",
              errors: errors
            });
          }
        }); 
    }
    // send back a signed web token if they are logged in
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