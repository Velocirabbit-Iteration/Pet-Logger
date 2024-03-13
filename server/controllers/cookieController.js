const User = require('../models/petLoggerModels.js');
const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  console.log('cookieController 1');
  console.log('cookieController 2');
  const id = res.locals._id;
  try {
    if (id) {
      res.cookie('ssid', id, { httpOnly: true });
      return next();
    }
  } catch (error) {
    return next({
      log: 'Error in cookieController.setSSIDCookie',
      error,
      message: 'Problem setting cookie',
      status: 401,
    });
  }
  // User.findOne({ username })
  //   .then((result) => {
  //     console.log('cookieController 3');
  //     // console.log('find user in cookieController result:', result)
  //     console.log('cookieController 4');
  //     res.cookie('ssid', id, { httpOnly: true });
  //     console.log('cookieController 5');
  //     return next();
  //   })
  //   .catch((error) => {
  //     next({
  //       log: 'error in cookieController.setSSIDCookie: ' + error,
  //       message: 'error setting cookie',
  //       status: 500,
  //     });
  //   });
  // return next();
};

module.exports = cookieController;
