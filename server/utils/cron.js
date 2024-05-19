const cron = require('node-cron');
const { fetchAllRidesByStatus, fetchSinglRideInfo } = require('./fetchAllRidesByStatus');
const { fetchIdleDrivers } = require('./fetchIdleDrivers');
const { getSettings } = require('../utils/getSettings');
const { AssignRidToDriver, removeDriverFormRide, updateRideAndDriverModal } = require('./comman');
const { assignedRides } = require('./manuallyAssignedRides');

let IdleRides = [];
let settings = {};
let RideIds = [];
let driverIds = []
// let currentRidesIndex;
// const startCron = () => {

const startCron = cron.schedule('*/5 * * * * *', async () => {

    await checkForManual();
    await assignNewDriverToRide();
    console.log('djakfj');


}, {
    scheduled: false
})

// }

// startCron.start()


const assignNewDriverToRide = async (ride) => {

    IdleRides = await fetchAllRidesByStatus(1 ,true);
    console.log('idlerides by nearby',IdleRides);

    // console.log('dddddddddddddxxxxxxxxxxxx');
    // if (ride.notAssigndDrivers) {
    //     // console.log('dddddddddddddxxxxxxxxxxxx', ride.notAssigndDrivers);
    //     if (ride.notAssigndDrivers && ride.notAssigndDrivers.length > 0 && ride.notAssigndDrivers[0]._id) {
    //         console.log('broooooo', ride.notAssigndDrivers[0]._id);
    //         await AssignRidToDriver(ride._id, ride.notAssigndDrivers[0]._id);
    //         console.log('ride if ', ride._id);
    //         let ridefetched = await fetchSinglRideInfo(ride._id);
    //         console.log('ridefetched', ridefetched);
    //         global.ioInstance.emit('updateListFromCron', ridefetched)
    //     } else {
    //         if (ride.driverId && ride.driverId._id) {
    //             removeDriverFormRide(ride._id, ride.driverId._id);
    //         }
    //         console.log('Not happeeinfdda');

    //     }
    // }
}


const checkForManual = async () => {
    console.log('workd');
    let driverIds = []
    let rideIds = [];
    let getRidesInfo = await assignedRides();
    console.log('lendth', getRidesInfo.length);
    if (getRidesInfo.length > 0) {
        console.log('workd2');
        console.log('getRidesInfo', getRidesInfo);
        rideIds = getRidesInfo[0]._ids
        driverIds = getRidesInfo[0].driverIds
        console.log('getRidesInfo', getRidesInfo);
        console.log('rideid inside cron', rideIds);
        await updateRideAndDriverModal(rideIds, driverIds)
        global.ioInstance.emit('TimesUpForAssigndRides', rideIds)

    }
}




module.exports = { startCron }