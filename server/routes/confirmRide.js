const express = require('express');
let routes = express.Router();

const { getRides, getVehicleTypes } = require('../controllers/confirmRide-controller');

routes.post('/getRides', getRides);

routes.post('/getVehicleTypes', getVehicleTypes);


module.exports = routes