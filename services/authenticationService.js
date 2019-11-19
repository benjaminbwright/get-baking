let jwt = require("jsonwebtoken");

module.exports = {
  // take a user object and generate a token
  getToken: function(user, callback) {
    jwt.sign({user}, process.env.JWT_PRIVATEKEY, {expiresIn: "1h"}, function(err, token) {
      callback(err, token);
    });
  },

  // middleware to verify a token sent with a request
  verifyToken: function(req, res, next) {
    const header = req.headers.authorization;

    // Check if authorization headers are undefined
    if(typeof header !== "undefined") {
      // Get the token from the auth header
      const bearer = header.split(" ");
      const token = bearer[1];
      console.log(bearer[1]);

      // verify the token
      jwt.verify(token, process.env.JWT_PRIVATEKEY, (err, authorizedData) => {
        if (err) {
          req.authError = err;
        }
        next();
      });
      
    } else {
      res.sendStatus(403);
    }
  }
};