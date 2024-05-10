const { Server } = require('socket.io');
const { getDrivers } = require('../controllers/confirmRide-controller');
const { runnigRequest } = require('../controllers/runningRequest-controller');

let ioInstance;

function initialize(server) {
    ioInstance = new Server(server, {
        cors: {
            origin: ['http://localhost:4200'],
            METHODS: ['GET', 'POSt'],
            credentials: true,
        }
    })

    ioInstance.on('connection', (socket) => {
        console.log('new connection ', socket.id);
        socket.on('formClient', (data) => {
            console.log('formClient event', data);
        })

        socket.on('getActiveDriversForAssign', async (data) => {
            console.log('getDataForAssign', data);
            let Drivers = await getDrivers(data.cityId, data.typeId);
            if (Drivers) {
                socket.emit('ActiveDrivers', Drivers);
            }
        })

        socket.on('assignDriverToRide', async (data) => {
            console.log('assignDriverToRide', data);
            let assignedRideWithDriver = await runnigRequest(data.rideId, data.driverId);
            if (assignedRideWithDriver) {
                ioInstance.emit('assignedRideWithDriver', assignedRideWithDriver);
            }
        })
    })
}


function getIOInstance() {
    return ioInstance;
}

module.exports = { initialize, getIOInstance };