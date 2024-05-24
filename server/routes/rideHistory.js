const express = require('express');
let routes = express.Router();

const { getRides } = require('../controllers/rideHistory-controller')

routes.post('/getRidesInHistory', getRides);

module.exports = routes