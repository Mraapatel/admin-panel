const express = require('express');
let routes = express.Router();

const { getRides, getVehicleTypes ,getDrivers  } = require('../controllers/confirmRide-controller');

routes.post('/getRides', getRides);

routes.post('/getVehicleTypes', getVehicleTypes);

routes.post('/getDriverForAssignRide', getDrivers);



module.exports = routes