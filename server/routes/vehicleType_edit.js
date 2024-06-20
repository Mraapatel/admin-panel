const express = require('express');
const multer = require('multer')
const routes = express.Router();
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/uploads')
    cb(null, uploadPath); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Use the original filename
    console.log(`${file.originalname}`)
  }
});

const upload = multer({ storage: storage });


module.exports = routes