const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

router.post(
  '/signup',
  authController.addNewUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json(res.locals._id);
  }
);

router.post(
  '/login',
  authController.compareUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json(res.locals._id);
  }
);

router.get('/session', sessionController.isLoggedIn, (req, res) => {
  res.status(res.locals.status).json({
    _id: res.locals.userSessionId,
    name: res.locals.name,
    userLoggedIn: res.locals.sessionBoolean,
  });
});

module.exports = router;
