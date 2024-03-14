const Session = require('../models/sessionModel');
const { User } = require('../models/petLoggerModels');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const { ssid } = req.cookies;
    // console.log('Checking session', ssid);

    // if (!ssid) {
    //   return res.redirect('/login');
    // }

    const session = await Session.findOne({ cookieId: ssid });

    if (session) {
      const userInfo = await User.findById(ssid);
      const { name } = userInfo;
      res.locals.name = name;
      res.locals.userSessionId = ssid;
      res.locals.status = 200;
      res.locals.sessionBoolean = true;
      console.log(res.locals);
      return next();
    } else {
      res.locals.sessionBoolean = false;
      res.locals.status = 401;
      return next();
    }
  } catch (error) {
    return next({
      log: 'error in middleware: sessionController.isLoggedIn: ' + error,
      message: 'Session error: check logs for more details',
      status: 500,
    });
  }
};

sessionController.startSession = async (req, res, next) => {
  const _id = res.locals._id;
  try {
    if (!_id) {
      throw new Error('No user id found for session');
    }
    await Session.create({ cookieId: _id });
    return next();
  } catch (error) {
    return next({
      log: 'error in middleware: sessionController.startSession: ' + error,
      message:
        'Session error: Problem starting session: check logs for more details',
      status: 500,
    });
  }
};

module.exports = sessionController;
