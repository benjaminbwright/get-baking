// add environment variables to the process object
require('dotenv').config();

// require node modules
// express
const express = require('express');
// mongoose
const mongoose = require('mongoose');

// the express server port
const PORT = process.env.PORT;

// setup express app
const app = express();

// connect mongoose to mongo
mongoose.connect("mongodb://localhost/getbaking", { useNewUrlParser: true });

// connect to models folder
const db = require('./db');
console.log(db.User)

// setup public static folder
app.use(express.static('public'));
// parse request bodies
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

// setup "Hello World" route
app.get('/', (req,res) => {
  // send hello world as a string
  // TODO: add a static html page in the public folder instead
  res.send('Hello World!!');
})

// Users routes
// TODO: move to api routes folder
// TODO: create user CRUD

// Create new user
app.post('/api/users', ( req , res) => {
  const user = new db.User(req.body);
  db.User.create(user)
    .then(function(user){
      res.send("user inserted");
    });
});

// Get all users
app.get('/api/users', ( req, res ) => {
  res.send("all the users will display here");
});

// Get a single user
app.get('/api/users/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will display here`);
});

// update a user
app.put('/api/users/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will be updated here`);
});

// delete a user
app.delete('/api/users/:id', ( req, res ) => {
  res.send(`User ${req.params.id} will be destroyed here`);
});

// setup 404 route
app.get('*', (req, res) => {
  // send the 404 message
  // TODO: add a static file for this
  res.send("404 get out of my site");
});


// start the express app listener
app.listen(PORT, () => {
  //console log the port
  console.log(`The server is running on ${PORT}`);
});