const User = require('../models/User');

class UserController {
  //[GET] /users/
  index = (req, res, next) => {
    User.find({})
      .then((users) => {
        res.json(users);
      })
      .catch(next);
  };
}

module.exports = new UserController();
