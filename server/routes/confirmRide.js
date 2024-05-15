const express = require('express');
let routes = express.Router();

const { getRides, getVehicleTypes, getDrivers, assignNearestDriver } = require('../controllers/confirmRide-controller');

routes.post('/getRides', getRides);

routes.post('/getVehicleTypes', getVehicleTypes);

routes.post('/getDriverForAssignRide', getDrivers);

routes.post('/assignNearestDriver', assignNearestDriver);



module.exports = routes