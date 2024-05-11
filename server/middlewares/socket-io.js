const { Server } = require('socket.io');
const { getDrivers } = require('../controllers/confirmRide-controller');
const { runnigRequest, allRunnigRequest, driverAccecptedRide } = require('../controllers/runningRequest-controller');

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
        console.log('new connection-------->>>>>>>>>>>> ', socket.id);
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
            let assignedRideWithDriver = await runnigRequest(data.rideId, data.driverId, data.rideStatus);
            ioInstance.emit('assignedRideWithDriver', assignedRideWithDriver);
        })

        socket.on('getTheRunningRequests', async (data) => {
            let assignedRidesWithDrivers = await allRunnigRequest(data.rideStatus);
            socket.emit('allAssignedRidesWithDrivers', assignedRidesWithDrivers);
        })

        socket.on("driverAccecptedRideRequest", async (data) => {
            let accecptedRide = driverAccecptedRide(data.rideId);
            ioInstance.emit('acceptedRideWithDriver', accecptedRide)
        })
    })
}


function getIOInstance() {
    return ioInstance;
}

module.exports = { initialize, getIOInstance };