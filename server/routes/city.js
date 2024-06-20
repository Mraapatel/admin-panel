const express = require('express');
const routes = express.Router();


const {addZone , getCountries , saveChangedZone} = require('../controllers/city-controller')


routes.post('/addZone', addZone);

routes.post('/cities', getCountries);

routes.post('/saveChangedZone', saveChangedZone);

module.exports = routes