const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const authController = require('../controllers/authController');

router.post('/signup', authController.addNewUser, (req, res) => {
  return res.status(200).send();
});

router.post('/login', authController.compareUser, (req, res) => {
  return res.status(200).send();
});

module.exports = router;
