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
  router. ('/api/cars/new', db.createACar)

// GET CARS Show(read one)
  router.get('/api/cars/:id', db.getACar)

// PUT CARS Update
  router. ('/api/cars/:id/update', db.updateACar)

// DELETE CARS Destroy
  router. ('/api/cars/', db.deleteACar)

module.exports = router;
