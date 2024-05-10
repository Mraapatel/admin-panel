const express = require('express');
let routes = express.Router();

const { storeRide  , getRides ,getVehicleTypes} = require('../controllers/createRide-controller')

routes.post('/storeRide', storeRide);

routes.post('/getRides', getRides);

routes.post('/getVehicleTypes', getVehicleTypes);


module.exports = routes