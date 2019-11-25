const db = require('../db');
const bcrypt = require('bcrypt');
const auth = require('../services/authenticationService')

const saltRounds = 10;

module.exports = {

  // Register/create a new user
  registerUser: function( req, res ) {
    // get the credentials from the request body
    const user = new db.User(req.body);
    // create a new user
    db.User.create(user)
      .then(function(user){
        // send back the user json object
        res.json(user);
      });
  },

  // Login a user
  loginUser: function( req, res ) {
    // get the data from the request body
    const email = req.body.email;
    const password = req.body.password;

    // set invalid to false
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
              // Sanitized user for token payload
              const tokenUser = {
                firstName: user[0].firstName,
                lastName: user[0].lastName,
              }

              // get a new token
              auth.getToken(tokenUser, function(err, token) {
                if (err) {console.log(err);}
                // send a response with the token and the user
                res.status(200).json({
                  message: "Auth OK",
                  token: token,
                  errors: errors,
                  authUser: tokenUser
                });
              });
            });
          } else {
            // add any errors to the errors array
            errors.push({auth: "Auth error - user not found."});
            // send a response including the errors
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
    db.User.find()
      .then(users => {
        console.log(users);
        const data = {
          users,
          decoded: req.decoded
        }
        console.log(req.decoded)
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
      //TODO: add some error handling
    
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