const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

express().use(bodyParser.urlencoded({extended: true}));
/* GET users listing. */
const geo = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'Grigory',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-67.032, 28.913]
    },
    properties: {
      title: 'Grigory',
      description: 'Hi!'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-117.032, 18.913]
    },
    properties: {
      title: 'Grigory',
      description: 'Привет всем!'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      title: 'Grigory',
      description: 'Хочу в L.A.!'
    }
  }]
};

router.get('/', function (req, res) {
  res.json(geo);
});

router.post('/', (req, res) => {
  geo.features.push(req.body);
  res.send('Success');
})

module.exports = router;
