const db = require('../db');

module.exports = {
  registerUser: function( req, res ) {
    const user = new db.User(req.body);
    db.User.create(user)
      .then(function(user){
        res.json(user);
      });
  }
}