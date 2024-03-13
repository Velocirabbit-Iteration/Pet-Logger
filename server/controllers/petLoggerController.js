//  DOG {
// 	DogID: integer,
// 	Name: string,
// 	Age: number,
// 	Breed: string
// 	gender: string,
// 	Users: [userID: integer]
// 	Posts: [{postType: string, details: string, date:date}]
// }

// GET REQUEST TO LOAD ALL DEPENDENTS. Info needed: name and image and id. Type for response : ARRAY of dog objects
// Method: GET
// Endpoint: /dog
// ControllerMethod:
// Response format:

// Method: POST
// Endpoint: localhost:3000/dog
// Body: { name, breed, age, gender }
// Controller Method: addDog
const model = require('../models/petLoggerModels');
const petLoggerController = {};

// GET: middleware for retreiving a dog data
petLoggerController.getDogs = async (req, res, next) => {
  try {
    //retrieve the userId from req.params
    console.log('req params', req.params);
    const userId = req.params.user;
    //get all the dogs from the database
    const dogs = await model.Dog.find({});
    console.log({ dogs });
    // for each dog returned, check if the usersarray contained the userId
    const matchingDogs = dogs.filter((dog) => dog.users.includes(userId));
    res.locals.matchingDogs = matchingDogs;
    return next();
  } catch (err) {
    // handle errors
    return next({
      log: `Error in getDog middleware ${err}`,
      status: 500,
      message: `Error in getDog middleware`,
    });
  }
};

// petLoggerController.getDogs2 = async (req, res, next) => {
//   try {
//     //retrieve the userId from req.params
//     const userId = req.params.user;
//     //get all the dogs from the database
//     const dogs = await model.Dog.find({ $in: ['$userId', '$users'] });
//     // for each dog returned, check if the usersarray contained the userId
//     res.locals.matchingDogs = dogs;
//     return next();
//   } catch (err) {
//     // handle errors
//     return next({
//       log: `Error in getDog middleware ${err}`,
//       status: 500,
//       message: `Error in getDog middleware`,
//     });
//   }
// };

// POST: middleware for adding a new dog
petLoggerController.addDog = async (req, res, next) => {
  try {
    // declare the constants we're going to use
    const { name, breed, age, gender, users } = req.body;
    // async connect to the mongo DB, and create a new dog
    const newDog = await model.Dog.create({ name, breed, age, gender, users });
    // save the dog object in res.locals as newDog
    res.locals.newDog = newDog;
    console.log('newDog', res.locals.newDog);
    return next();
  } catch (err) {
    // handle errors
    return next({
      log: `Error in addDog middleware ${err}`,
      status: 500,
      message: `Error in addDog middleware`,
    });
  }
};

// POST: middleware for adding a new user
petLoggerController.addUser = async (req, res, next) => {
  try {
    const { name, username, password } = req.body;
    const newUser = await model.User.create({ name, username, password });
    res.locals.newUser = newUser;
    return next();
  } catch (err) {
    // handle errors
    return next({
      log: `Error in addUser middleware ${err}`,
      status: 500,
      message: `Error in addUser middleware`,
    });
  }
};

// POST: for adding a new post for a dependent(dog)
petLoggerController.addPost = async (req, res, next) => {
  try {
    const { dogId, postType, details } = req.body;

    // update the dog object to have a new post in its post array
    // update we'll make is pushing a new post into the posts array on the dog
    // we'll return just the new post

    const filter = { _id: dogId };
    const update = { $push: { posts: { postType, details } } };

    const dog = await model.Dog.findOneAndUpdate(filter, update, { new: true });
    // console.log(dog.posts);
    res.locals.dog = dog.posts[dog.posts.length - 1];
    return next();
  } catch (err) {
    // handle errors
    return next({
      log: `Error in addPost middleware ${err}`,
      status: 500,
      message: `Error in addPost middleware ${err}`,
    });
  }
};

// GET: for getting all dogs posts when given dog Id in req.query
petLoggerController.getPost = async (req, res, next) => {
  try {
    const { dogId } = req.query;
    const foundDog = await model.Dog.find({ _id: dogId });
    console.log(foundDog[0].posts);
    res.locals.posts = foundDog[0].posts;

    return next();
  } catch (error) {
    return next({
      log: `Error in getPost middleware ${err}`,
      status: 500,
      message: `Error in getPost middleware ${err}`,
    });
  }
};

module.exports = petLoggerController;
