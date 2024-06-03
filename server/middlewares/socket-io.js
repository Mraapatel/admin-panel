const { Server } = require('socket.io');
const { getDrivers } = require('../controllers/confirmRide-controller');
const { runnigRequest, allRunnigRequest, driverAccecptedRide } = require('../controllers/runningRequest-controller');

global.ioInstance = null

function initialize(server) {
    global.ioInstance = new Server(server, {
        cors: {
            origin: ['http://localhost:4200'],
            METHODS: ['GET', 'POSt'],
            credentials: true,
        }
    })

    global.ioInstance.on('connection', (socket) => {
        console.log('new connection-------->>>>>>>>>>>> ', socket.id);
        socket.on('formClient', (data) => {
            console.log('formClient event', data);
        })

        socket.on('updateCount', async (data) => {
            console.log('updateCount event catched', data);
            global.NotificationCount++
            console.log('global' ,global.NotificationCount);
            // console.log('socket object',socket);
            socket.emit('updatedCount', global.NotificationCount);

        })

        socket.on('updateCountDes', async (data) => {
            console.log('updateCountDes event catched', data);
            global.NotificationCount--
            console.log('global iin des ' ,global.NotificationCount);
            // console.log('socket object',socket);
            socket.emit('updatedCount', global.NotificationCount);
        })

        socket.on('getCount', async (data) => {
            console.log('getCount event catched', data);
            // global.NotificationCount--
            console.log('global iin des ' ,global.NotificationCount);
            // console.log('socket object',socket);
            socket.emit('updatedCount', global.NotificationCount);
        })

        // db.collection.aggregate([
        //     { $group: { _id: null, maxIndex: { $max: "$index" } } }
        //   ])

        // db.collection.updateOne(
        //     { _id: newDocumentId },
        //     { $set: { index: { $add: ["$maxIndex", 1] } } }
        //   )

        // socket.on('getActiveDriversForAssign', async (data) => {
        //     console.log('getDataForAssign', data);
        //     let Drivers = await getDrivers(data.cityId, data.typeId);
        //     if (Drivers) {
        //         socket.emit('ActiveDrivers', Drivers);
        //     }
        // })

        // socket.on('assignDriverToRide', async (data) => {
        //     console.log('assignDriverToRide', data);
        //     let assignedRideWithDriver = await runnigRequest(data.rideId, data.driverId, data.rideStatus);
        //     global.ioInstance.emit('assignedRideWithDriver', assignedRideWithDriver);
        // })

        // socket.on('getTheRunningRequests', async (data) => {
        //     let assignedRidesWithDrivers = await allRunnigRequest(data.rideStatus);
        //     socket.emit('allAssignedRidesWithDrivers', assignedRidesWithDrivers);
        // })

        // socket.on("driverAccecptedRideRequest", async (data) => {
        //     let accecptedRide = driverAccecptedRide(data.rideId);
        //     global.ioInstance.emit('acceptedRideWithDriver', accecptedRide)
        // })
    })

}


module.exports = { initialize };