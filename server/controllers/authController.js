const { User } = require('../models/petLoggerModels.js');
const bcrypt = require('bcryptjs');
const authController = {};

authController.addNewUser = (req, res, next) => {
  const { name, userName, password } = req.body;

  if (!name || !userName || !password) {
    return next({
      log: 'authController.addNewUser did not receive all three required arguments (name, userName & password)',
      message: 'name userName and password are all required - try again',
      status: 400,
    });
  }
  User.create({ name, userName, password })
    .then((result) => {
      console.log('new user created');

      res.locals._id = result._id.toString();
      return next();
    })
    .catch((error) => {
      // console.error(error.message);
      return next({
        log: 'error in authController.addNewUser: ' + error,
        message: 'server error when adding new user',
        status: 500,
      });
    });
};

authController.compareUser = (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return next({
      log: 'authController.compareUser did not receive both required arguments (userName & password)',
      message: 'userName and password are both required - try again',
      status: 401,
    });
  }
  User.findOne({ userName })
    .then((data) => {
      res.locals._id = data._id.toString();
      bcrypt
        .compare(password, data.password)
        .then((matchBoolean) => {
          if (matchBoolean) {
            return next();
          } else {
            res.status(401).send('user not authorized');
          }
        })
        .catch((error) => {
          return next({
            log:
              'error in authController.compareUser: bcrypt compare error' +
              error,
            message: 'server error when validating existing user',
            status: 500,
          });
        });
    })
    .catch((error) => {
      return next({
        log: 'error in authController.addNewUser: ' + error,
        message: 'server error when adding new user',
        status: 500,
      });
    });
};

module.exports = authController;
