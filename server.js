// add environment variables to the process object
require('dotenv').config();

// require node modules
// express
var express = require('express');
// mongoose
var mongoose = require('mongoose');

// the express server port
PORT = process.env.PORT;

// setup express app
app = express();

// connect mongoose to mongo
mongoose.connect("mongodb://localhost/getbaking", { useNewUrlParser: true });

// connect to models folder

// setup public static folder
app.use(express.static('public'));

// setup "Hello World" route
app.get('/', (req,res) => {
  // send hello world as a string
  // TODO: add a static html page in the public folder instead
  res.send('Hello World!!');
})

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