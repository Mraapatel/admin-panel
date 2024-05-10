const express = require('express');
const multer = require('multer')
const routes = express.Router();
const path = require('path')

const { addUser, getUser, updateUser, deleteUser, addCard, getCards, setDefaultCard, deleteCard  ,getSinglUser} = require('../controllers/user-controller');
// const { log } = require('console');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/userProfile')
    cb(null, uploadPath); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Use the original filename
  }
});

const upload = multer({ storage: storage })

routes.post('/addUser', upload.single('userProfile'), addUser);

routes.post('/addCard', addCard);

routes.post('/getCards', getCards);

routes.post('/setDefaultCard', setDefaultCard);

routes.post('/deleteCard', deleteCard);

routes.post('/getUser', getUser);

routes.post('/updateUser', upload.single('userProfile'), updateUser);

routes.post('/deleteUser', deleteUser);

routes.post('/getSinglUser', getSinglUser);

module.exports = routes