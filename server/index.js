const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const socket = require('./middlewares/socket-io')


const app = express();
const server = require('http').Server(app);
socket.initialize(server);
const Port = process.env.PORT || 5000;

const {startCron} = require('../server/utils/cron');
// startCron();
const jwt = require('./routes/jwt_token');
const vehicleType = require('./routes/vehicleType')
const addCounty = require('./routes/addCountry');
const city = require('./routes/city');
const pricing = require('./routes/pricing');
const settingStorage = require('./routes/setting');
const user = require('./routes/user');
const driver = require('./routes/driverList');
const varifyToken = require('./middlewares/varifyToken');
const createRide = require('./routes/createRide');
const confirmRide = require('./routes/confirmRide');
const runningRequest = require('./routes/runningRequest');

mongoose.connect('mongodb://127.0.0.1:27017/Product')
    .then(() => console.log('connection is successfull...'))
    .catch((error) => console.log(error));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use('/icons', express.static('./public'));
// app.use('/userProfile', express.static('./public/userProfile'));
// app.use('/driverProfile', express.static('./public/driverProfile'));
app.use(cors())


app.use('/authenticate', jwt);

app.use('/vehicleType', varifyToken, vehicleType);

app.use('/country', varifyToken, addCounty);

app.use('/city', varifyToken, city);

// app.use('/pricing', varifyToken, pricing);
app.use('/pricing', pricing);

app.use('/setting', varifyToken, settingStorage)

app.use('/User', user);
// app.use('/User', varifyToken, user);

app.use('/driver', varifyToken, driver);

app.use('/createRide', createRide);

app.use('/confirmRide', confirmRide);

app.use('/runningRequest', runningRequest);

// app.listen(Port, () => {
//     console.log(`server is listning to port no:${Port}`);
// });
server.listen(Port, () => {
    console.log(`server is listning to port no:${Port}`);
});



