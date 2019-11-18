// add environment variables to the process object
require('dotenv').config();

// require node modules
// express
const express = require('express');
// mongoose
const mongoose = require('mongoose');
// path
const path = require('path');

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
  res.send('Hello World!!');
})

// Users routes
const userRoutes = require('./routes/api/userRoutes');
app.use('/api/users', userRoutes)

// setup 404 route
app.get('*', (req, res) => {
  // send the 404 message
  // TODO: add a static file for this
  // res.sendFile("404 get out of my site");
  res.sendFile(path.join(__dirname,'/public/404.html'))
});


// start the express app listener
app.listen(PORT, () => {
  //console log the port
  console.log(`The server is running on ${PORT}`);
});