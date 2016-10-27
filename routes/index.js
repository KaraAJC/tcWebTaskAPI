var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET CARS Index(read all)
  router.get('/api/cars', db.getAllCars)

// POST CARS Create
  router.post('/api/cars', db.createACar)

// GET CARS Show(read one)
  router.get('/api/cars/:id', db.getACar)

// PUT CARS Update
  // router.put('/api/cars/:id/update', db.updateACar)

// DELETE CARS Destroy
  // router.delete('/api/cars/', db.deleteACar)

module.exports = router;
