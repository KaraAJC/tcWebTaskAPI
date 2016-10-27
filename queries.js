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
  db.any('select * from cars') // TODO: build task that runs the following statement: SELECT * FROM cars INNER JOIN pagestats ON cars.id=pagestats.carID INNER JOIN photos ON cars.id=photos.carID
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
  console.log("the params are: " + JSON.stringify(req.params));
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
  console.log("The requests are: " + JSON.stringify(req.body));
  // db.none(pgp.as.format('INSERT INTO cars(${req.body.values}) VALUES(${val2}, ${val1})', req.body, { partial: true })); TODO
  db.none("INSERT INTO cars VALUES()", req.body)
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