const Kindred = require('../models/KindredModel');

const kindredController = {};

//get all kindred
kindredController.getAllKindred = (req, res, next) => {
  Kindred.find({})
    .then((kindredArray) => {
      res.status(200).json(kindredArray);
    })
    .catch((err) => {
      next({
        log: 'Error fetching all kindred',
        status: 500,
        message: { err: 'Internal Server Error' },
      });
    });
};

//creates kindred
kindredController.createKindred = (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  console.log('Name not provided in request body.');
  if (!name) {
    return next({
      log: 'Name needed.',
      status: 400,
      message: { err: 'Kindred name not provided' },
    });
  }
  console.log('about to create kindred with name:', name);
  const kindred = new Kindred({ name: name });
  console.log(kindred);
  kindred
    .save({ name: name })
    .then((response) => {
      res.status(200);
    })
    .catch((err) => {
      next({
        log: 'Error creating kindred',
        status: 500,
        message: { err: err },
      });
    });
};

//ERICS COPY
kindredController.createKindred2 = async (req, res, next) => {
  // write code here
  // console.log(req.body)

  try {
    const newUser = {
      name: req.body.name,
    };
    const user = await Kindred.create(newUser);
    console.log('userController', user);
    res.locals.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
//END ERICS COPY

// kindredController.createKindred = async (req, res, next) => {
//   console.log('req body:', req.body);

//   const { name } = req.body;
//   if (!name) {
//     console.log('Name not provided in request body.');
//     return next({
//       log: 'Name needed.',
//       status: 400,
//       message: { err: 'Kindred name not provided' },
//     });
//   }
//   try {
//     console.log('about to create kindred with name:', name);
//     const kindred = await Kindred.create({ name });
//     console.log('Kindred created:', kindred); //MongooseError: Operation `kindreds.insertOne()` buffering timed out after 10000ms at Timeout.
//     res.status(200).json({ kindred });
//   } catch (err) {
//     console.error('error creating kindred:', err);
//     next({
//       log: 'Error creating kindred',
//       status: 500,
//       message: { err: 'Internal Server Error' },
//     });
//   }
// };

//finds kindred. this middleware is used right before any middleware that first needs to identify a Kindred document
kindredController.findKindred = async (req, res, next) => {
  try {
    const { name } = req.params;
    if (!name) {
      return next({
        log: 'Kindred name needed.',
        status: 400,
        message: { err: 'Kindred name not provided.' },
      });
    }
    const kindred = await Kindred.findOne({
      name: name,
    });
    if (!kindred) {
      return next({
        log: 'Kindred not found',
        status: 404,
        message: { err: 'Kindred document not found.' },
      });
    }
    res.locals.kindred = kindred;
    return next();
  } catch (err) {
    return next({
      log: 'Error finding kindred',
      status: 500,
      message: { err: 'Internal Server Error' },
    });
  }
};
//deletes kindred. user provides name in request body
kindredController.deleteKindred = async (req, res, next) => {
  const kindred = res.locals.kindred;
  try {
    await Kindred.deleteOne({ _id: kindred._id });
    res.status(200).json({
      message: `${kindred.name} profile deleted.`,
    });
  } catch (err) {
    next({
      log: 'Error deleting kindred',
      status: 500,
      message: { err: 'Internal Server Error' },
    });
  }
};

//adds Date to kindred, also calculates health and returns it
kindredController.addDate = async (req, res, next) => {
  const { date } = req.body;
  if (!date) {
    return next({
      log: 'Date required.',
      status: 400,
      message: { err: 'Date not provided.' },
    });
  }
  try {
    const objDate = new Date(date);
    res.locals.kindred.date = objDate;
    await res.locals.kindred.save(); //https://mongoosejs.com/docs/documents.html
    return next();
  } catch (err) {
    next({
      log: 'Error adding date to kindred',
      status: 500,
      message: { err: 'Internal Server Error' },
    });
  }
};

//return health for user-kindred relationship
kindredController.getHealth = async (req, res, next) => {
  const kindred = res.locals.kindred;
  try {
    const dateNow = new Date();
    const daysDiff = (dateNow - kindred.date) / 86400000; //diff between two Dates: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
    let health;
    if (daysDiff <= 7) health = 3;
    if (daysDiff > 7 && daysDiff <= 14) health = 2;
    if (daysDiff > 14 && daysDiff <= 28) health = 1;
    if (daysDiff > 28) health = 0;
    res.locals.kindred.health = health;
    // await res.locals.kindred.save(); //https://mongoosejs.com/docs/documents.html
    res.status(200).json({ health: health }); //to decide where health score goes after
  } catch (err) {
    next({
      log: 'Error calculating health',
      status: 500,
      message: { err: 'Internal Server Error' },
    });
  }
};

module.exports = kindredController;

//Stretch
//within function to add events to Kindred
//get particularKindred using Kindred.find(`identifier`)
// particularKindred.events.push({
//   eventName: eventName,
//   eventDate: eventDate,
//   eventDescription: eventDescription,
// })

//mongoose array methods: .push to add documents for nested schemas, .isMongooseArray to check if pushable
//https://masteringjs.io/tutorials/mongoose/array#document-arrays
