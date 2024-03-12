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
    return res.status(200).send(res.locals.createResult);
  }
);

router.post(
  '/login',
  authController.compareUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).send();
  }
);

module.exports = router;
