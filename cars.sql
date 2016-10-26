DROP DATABASE IF EXISTS dealership;
CREATE DATABASE dealership;

\c dealership;

CREATE TABLE cars (
  ID SERIAL PRIMARY KEY,
  make VARCHAR,
  model VARCHAR,
  year INTEGER,
  price_range VARCHAR,
  mileage INTEGER,
  cylinders VARCHAR,
  city_mpg INTEGER,
  highway_mpg INTEGER,
  engine VARCHAR,
  vin VARCHAR,
  item_num VARCHAR
);

CREATE TABLE pagestats (
  ID SERIAL PRIMARY KEY,
  carID INTEGER,
  views INTEGER,
  shares INTEGER,
  saves INTEGER
);

CREATE TABLE photos (
  ID SERIAL PRIMARY KEY,
  carID INTEGER,
  filename VARCHAR,
  alt_txt VARCHAR
);

ALTER TABLE pagestats
  ADD FOREIGN KEY (carID)
  REFERENCES cars (ID);

ALTER TABLE photos
  ADD FOREIGN KEY (carID)
  REFERENCES cars (ID);

INSERT INTO cars (
  make,
  model,
  year,
  price_range,
  mileage,
  cylinders,
  city_mpg,
  highway_mpg,
  engine,
  vin,
  item_num
  )
  VALUES (
    'Ford',
    'Focus',
    2012,
    '$8,500 - $9,000',
    200000,
    'L4',
    20,
    25,
    '1.3',
    '3GNDA13D96S631406',
    '#1395P'
    );

INSERT INTO cars (
  make,
  model,
  year,
  price_range,
  mileage,
  cylinders,
  city_mpg,
  highway_mpg,
  engine,
  vin,
  item_num
  )
  VALUES (
    'Chevy',
    'Monte Carlo',
    1976,
    '$28,500 - $79,000',
    22000,
    'L4',
    28,
    30,
    '1.9',
    '3KAJC13D96S362016',
    '#1482K'
    );


INSERT INTO photos (carID, filename, alt_txt)
  VALUES (1, 'http://i2.wp.com/www.curbsideclassic.com/wp-content/uploads/2016/01/Snowtires.jpg?resize=768%2C512', 'ford focus pic');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (1, 'http://i2.wp.com/www.curbsideclassic.com/wp-content/uploads/2016/01/Maintenance.jpg?resize=768%2C512', 'ford focus pic');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (1, 'http://i2.wp.com/www.curbsideclassic.com/wp-content/uploads/2016/02/Interior-1200.jpg?resize=768%2C432', 'ford focus pic');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (1, 'http://i0.wp.com/www.curbsideclassic.com/wp-content/uploads/2016/01/winding.jpg?resize=768%2C512', 'ford focus pic');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (1, 'http://i1.wp.com/www.curbsideclassic.com/wp-content/uploads/2016/01/Canoes.jpg?resize=768%2C576', 'ford focus pic');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (2, 'http://i0.wp.com/www.curbsideclassic.com/wp-content/uploads/2012/05/birds-eye-view.jpg', 'birds-eye-view');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (2, 'http://i0.wp.com/www.curbsideclassic.com/wp-content/uploads/2012/05/drivers_sideview.jpg', 'drivers_sideview');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (2, 'http://i0.wp.com/www.curbsideclassic.com/wp-content/uploads/2012/05/Front.jpg', 'Front View');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (2, 'http://i2.wp.com/www.curbsideclassic.com/wp-content/uploads/2012/05/closeup_front.jpg', 'closeup_front');

INSERT INTO photos (carID, filename, alt_txt)
  VALUES (2, 'http://i1.wp.com/www.curbsideclassic.com/wp-content/uploads/2012/05/dash-with-8track.jpg', 'dash-with-8track');

INSERT INTO pagestats (carID, views, shares, saves)
  VALUES (1,37,20,15);

INSERT INTO pagestats (carID, views, shares, saves)
  VALUES (2,234,45439,565);