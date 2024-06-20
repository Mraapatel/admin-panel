const express = require('express');
const routes = express.Router();


const {saveData ,getKeys} = require('../controllers/allKey-controller');


routes.post('/update', saveData);

routes.post('/getKeys', getKeys);

module.exports = routes