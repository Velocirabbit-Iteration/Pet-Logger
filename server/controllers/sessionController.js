const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = async (req, res, next) => {
  // write code here
  try {
    const { ssid } = req.cookies;
    // console.log('Checking session', ssid);

    if (!ssid) {
      return res.redirect('/signup');
    }

    const session = await Session.findOne({ cookieId: ssid });

    if (session) {
      return next();
    } else {
      return res.redirect('/#/signup');
    }
  } catch (error) {
    return next({
      log: 'error in middleware: sessionController.isLoggedIn: ' + error,
      message: 'Session error: check logs for more details',
      status: 500,
    });
  }
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = async (req, res, next) => {
  //write code here
  try {
    if (!res.locals.createResult || !res.locals.createResult._id) {
      throw new Error('No user id found for session');
    }

    const userId = res.locals.createResult._id.toString();
    await Session.create({ cookieId: userId });

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
