const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const socket = require('./middlewares/socketIo');

// global.NotificationCount = null;


const app = express();
const server = require('http').Server(app);
socket.initialize(server);
const Port = process.env.PORT || 3000;
const mongodbUrl = process.env.MONGODBATLAS

const { startCron } = require('../server/utils/cron');
startCron();
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
const rideHistory = require('./routes/rideHistory');
const test = require('./routes/test');
const allkeys = require('./routes/allKey');

mongoose.connect(mongodbUrl)
    .then(() => console.log('connection is successfull...'))
    .catch((error) => console.log(error));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')))
// app.use('/icons', express.static('./public'));
// app.use('/userProfile', express.static('./public/userProfile'));
// app.use('/driverProfile', express.static('./public/driverProfile'));
app.use(cors());


app.use('/authenticate', jwt);

app.use(varifyToken);

app.use('/vehicleType', vehicleType);  //done

app.use('/country', addCounty); // done

app.use('/city', city); //done

app.use('/pricing', pricing); // done

app.use('/setting', settingStorage)

app.use('/User', user); // done

app.use('/driver', driver); // done 

app.use('/createRide', createRide); //done

app.use('/confirmRide', confirmRide); // done

app.use('/runningRequest', runningRequest); // done

app.use('/rideHistory', rideHistory); // done

app.use('/test', test);

app.use('/allkeys', allkeys); // done


server.listen(Port, () => {
    console.log(`server is listning to port no:${Port}`);
});

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const path = require('path');
// const socket = require('./middlewares/socketIo');
// const router = express.Router();

// const app = express();
// const server = require('http').Server(app);
// socket.initialize(server);
// const Port = process.env.PORT || 5000;
// const mongodbUrl = process.env.MONGODBATLAS

// const { startCron } = require('../server/utils/cron');
// // startCron();
// const jwt = require('./routes/jwt_token');
// const vehicleType = require('./routes/vehicleType')
// const addCounty = require('./routes/addCountry');
// const city = require('./routes/city');
// const pricing = require('./routes/pricing');
// const settingStorage = require('./routes/setting');
// const user = require('./routes/user');
// const driver = require('./routes/driverList');
// const varifyToken = require('./middlewares/varifyToken');
// const createRide = require('./routes/createRide');
// const confirmRide = require('./routes/confirmRide');
// const runningRequest = require('./routes/runningRequest');
// const rideHistory = require('./routes/rideHistory');
// const test = require('./routes/test');
// const allkeys = require('./routes/allKey');

// mongoose.connect(mongodbUrl)
//     .then(() => console.log('connection is successfull...'))
//     .catch((error) => console.log(error));


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/public', express.static(path.join(__dirname, 'public')))

// app.use(cors());

// app.use('/api', router);

// router.use('/authenticate', jwt);

// router.use(varifyToken);

// router.use('/vehicleType', vehicleType); 

// router.use('/country', addCounty); 

// router.use('/city', city);

// router.use('/pricing', pricing); 

// router.use('/setting', settingStorage)

// router.use('/User', user); 

// router.use('/driver', driver);  

// router.use('/createRide', createRide);

// router.use('/confirmRide', confirmRide); 

// router.use('/runningRequest', runningRequest); 

// router.use('/rideHistory', rideHistory); 

// router.use('/test', test);

// router.use('/allkeys', allkeys); 


// server.listen(Port, () => {
//     console.log(`server is listning to port no:${Port}`);
// });





