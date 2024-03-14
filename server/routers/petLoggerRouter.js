//Importing express and creating our router
const express = require('express');
const router = express.Router();

// import our relevant controllers
const petLoggerController = require('../controllers/petLoggerController');
/* WHAT IS THIS FILE DOING?
  use the controllers based on what kind of a request is coming in
    define the endpoint and method
    run middleware
    send a response back
*/

// Create a new dog
// Method: POST
// Endpoint: localhost:3000/api/dog
// Body: { name, breed, age, gender }
// Controller Method: addDog
// Return: newDog object
router.post('/dog', petLoggerController.addDog, (req, res) => {
  res.status(200).json(res.locals.newDog);
});

router.delete('/dog', petLoggerController.deleteDog, (req, res) => {
  res.status(200).send();
});

// get a user's dogs
// METHOD: GET
// Endpoint: localhost:3000/api/dog/:user
// Controller method: getDogs
// Response: array of matching dog objects

router.get('/dog/:user', petLoggerController.getDogs, (req, res) => {
  res.status(200).json(res.locals.matchingDogs);
});

// Get a dog's posts
// Method: GET
// Endpoint: localhost:3000/api/post (query: dogId)
// Controller method: getPost
// Response: array of post objects [{postType, details, date}]
router.get('/post', petLoggerController.getPost, (req, res) => {
  res.status(200).json(res.locals.posts);
});

//add new activity
//Method: POST
// Endpoint: localhost:3000/api/post
// Body: { dogID, postType, details }
// controller Method: addPost
// Response: updated dog object
router.post('/post', petLoggerController.addPost, (req, res) => {
  res.status(200).json(res.locals.dog);
});

// POST to USER => create a new user
// Method: POST
// Endpoint: localhost:3000/api/user
// Body: { username, name, password }
// Controller Method: addUser
// Return: newUser object
router.post('/user', petLoggerController.addUser, (req, res) => {
  res.status(200).json(res.locals.addUser);
});

// export this file
module.exports = router;
