const User = require('../models/petLoggerModels.js');
const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const { username } = req.body;
  User.findOne({ username })
    .then((result) => {
      // console.log('find user in cookieController result:', result)
      const id = result._id;
      res.cookie('ssid', id, { httpOnly: true });
      next();
    })
    .catch((error) => {
      next({
        log: 'error in cookieController.setSSIDCookie: ' + error,
        message: 'error setting cookie',
        status: 500,
      });
    });
  return next();
};

module.exports = cookieController;
