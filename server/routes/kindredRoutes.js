const express = require('express');
const router = express.Router();
const kindredController = require('../controllers/KindredController'); // Adjust the path as necessary

//this successfully logs and sends message:
// router.get('/create', (req, res, next) => {
//   console.log('hello from get');
//   res.status(200).send('Hello from GET /create');
// });

//create kindred
router.put('/create', kindredController.createKindred2);

//get all kindred
router.get('/all', kindredController.getAllKindred);

//get kindred
router.get('/:name', kindredController.findKindred);

//delete kindred
router.delete(
  '/:name',
  kindredController.findKindred,
  kindredController.deleteKindred
);

//add date to kindred, then send back health
router.post(
  '/:name/addDate',
  kindredController.findKindred,
  kindredController.addDate,
  kindredController.getHealth
);

//router.post('/:name/saveDate', kindredController.saveDate);

//get health of kindred
router.get(
  '/:name/getHealth',
  kindredController.findKindred,
  kindredController.getHealth
);

module.exports = router;
