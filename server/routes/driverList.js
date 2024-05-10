const express = require('express');
const multer = require('multer')
const routes = express.Router();
const path = require('path')

const { getCities } = require('../controllers/city-controller');
const {addDriver, getDrivers, updateDriver, deleteDriver ,addService ,approveDriver } = require('../controllers/driverList-controller');

// const { log } = require('console');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/driverProfile')
    cb(null, uploadPath); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Use the original filename
  }
});

const upload = multer({ storage: storage })

routes.post('/addDriver', upload.single('driverProfile'), addDriver);

routes.post('/addService', addService);

routes.post('/getCities', getCities);

// routes.post('/setDefaultCard', setDefaultCard);

// routes.post('/deleteCard', deleteCard);

routes.post('/getDrivers', getDrivers);

routes.post('/updateDriver', upload.single('driverProfile'), updateDriver);

routes.post('/deleteDriver', deleteDriver);

routes.post('/approve', approveDriver);

module.exports = routes