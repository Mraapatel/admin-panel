const express = require('express');
const routes = express.Router();
// const mongoose = require('mongoose');
// const { Schema } = require('mongoose');

const { getSettings, updateSettings} = require('../controllers/setting-controller');


routes.post('/',updateSettings);
routes.get('/',getSettings);


module.exports = routes
// module.exports = { Setting }