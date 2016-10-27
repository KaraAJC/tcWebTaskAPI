// Database connection & config
var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/dealership';
var db = pgp(connectionString);

// Query Functions
function getAllCars (req, res, next) {
  db.any('select * from cars')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL cars'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getACar(req, res, next) {
  var carID = parseInt(req.params.id);
  db.one('select * from cars where id = $1', carID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one car'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createACar(req, res, next) {
  console.log("the requests are: " + JSON.stringify(req.params));
  console.log("OR the requests are: " + JSON.stringify(req.body));

  db.none("INSERT INTO cars(make, model, year, price_range, mileage, cylinders, city_mpg, highway_mpg, engine, vin, item_num) VALUES(${make}, ${model}, ${year}, ${price_range}, ${mileage}, ${cylinders}, ${city_mpg}, ${highway_mpg}, ${engine}, ${vin}, ${item_num})", req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one car, thanks!'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllCars: getAllCars,
  getACar: getACar,
  createACar: createACar
  // updateACar: updateACar,
  // deleteACar: deleteACar
};