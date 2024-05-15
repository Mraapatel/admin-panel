const cron = require('node-cron');
const { fetchAllRidesByStatus } = require('./fetchAllRidesByStatus');
const { fetchIdleDrivers } = require('./fetchIdleDrivers');
const { getSettings } = require('../utils/getSettings');
const { AssignRidToDriver, removeDriverFormRide } = require('./comman');

let IdleRides = [];
let IdleDrivers = []
let settings = {};
let currentRidesIndex
const startCron = () => {

    cron.schedule('*/10 * * * * *', async () => {
        settings = await getSettings()
        console.log('setting.TimeOut', settings.TimeOut);

        IdleRides = await fetchAllRidesByStatus(1, true);

        console.log('IdleRidesInside the cron =========>', IdleRides);

        IdleRides.forEach(async (ride, index) => {
            currentRidesIndex = index;

            let drivers = await fetchIdleDrivers(ride.cityId, ride.typeId._id);
            let Object = {
                _id: ride._id,
                idleDrivers: drivers
            }
            IdleDrivers.push(Object)

            if (ride.driverId == null) {
                assignNewDriverToRide(ride)
            }
            // console.log('IdleDrivers',IdleDrivers);

            let dodd = checkTimeOut(ride.assignTime)
            if (dodd) {
                if (ride.driverId) {
                    removeDriverFormRide(ride._id, ride.driverId._id);
                }

                // if()
            }

        })

        // console.log('IdleDrivers[0].idleDrivers', IdleDrivers[1].idleDrivers);
    }, {
        scheduled: false
    })

}


function checkTimeOut(rideTime) {
    let currentTime = new Date();
    let ridesTime = new Date(rideTime);

    let timeDifference = (currentTime.getTime() - ridesTime.getTime()) / 1000

    if (timeDifference >= settings.TimeOut) {
        return true
    }
    return false
}


async function assignNewDriverToRide(ride) {
    let driverIndex
    let index = IdleDrivers.findIndex((driver) => driver._id == ride._id)

    let drivers = IdleDrivers[index].idleDrivers
    let nearestdriverList = ride.nearestdriverList

    if (nearestdriverList.length > 0) {

        OuterLoop:
        for (let i = 0; i < drivers.length; i++) {
            for (let j = 0; j < nearestdriverList.length; j++) {
                if (
                    // drivers[i]._id !== nearestdriverList[j]
                    drivers[i]._id.toString() !== nearestdriverList[j].toString()
                ) {
                    driverIndex = i
                    break OuterLoop;
                }
            }
        }
        console.log('drivers[driverIndex] ====>', drivers[driverIndex]);

        if (drivers.length > 0) {
            let driver = await AssignRidToDriver(ride._id, drivers[driverIndex]._id);
            IdleDrivers[currentRidesIndex].driverId = driver
        }
    }

    if (drivers.length > 0) {
        let driver = await AssignRidToDriver(ride._id, drivers[0]._id);

        IdleDrivers[currentRidesIndex].driverId = driver
    }

}


module.exports = { startCron }