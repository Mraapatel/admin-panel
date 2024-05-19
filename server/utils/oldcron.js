const cron = require('node-cron');
const { fetchAllRidesByStatus, fetchSinglRideInfo } = require('./fetchAllRidesByStatus');
const { fetchIdleDrivers } = require('./fetchIdleDrivers');
const { getSettings } = require('../utils/getSettings');
const { AssignRidToDriver, removeDriverFormRide } = require('./comman');

let IdleRides = [];
let IdleDrivers = []
let settings = {};
let currentRidesIndex;
const startCron = () => {

    cron.schedule('*/10 * * * * *', async () => {
        settings = await getSettings()
        console.log('setting.TimeOut', settings.TimeOut);

        IdleRides = await fetchAllRidesByStatus(1, true);

        // console.log('IdleRidesInside the cron =========>', IdleRides);

        IdleRides.forEach(async (ride, index) => {
            currentRidesIndex = index;

            let drivers = await fetchIdleDrivers(ride.cityId, ride.typeId._id);
            let Object = {
                _id: ride._id,
                idleDrivers: drivers.map(({ _id }) => _id)
            }
            IdleDrivers.push(Object)

            if (ride.driverId == null) {
                assignNewDriverToRide(ride);
                let ridefetched = await fetchSinglRideInfo(ride._id);
                global.ioInstance.emit('updateListFromCron', ridefetched)
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
        /*
// settings = await getSettings()
// console.log('setting.TimeOut', settings.TimeOut);

// IdleRides = await fetchAllRidesByStatus(1, true);
// console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyy', IdleRides);
// console.log('idleride', IdleRides[0].unmatchedDrivers[0]._id);

// return;

// IdleRides.forEach(async (ride, index) => {
// for (let i = 0; i < IdleRides.length; i++) {
 
//     // currentRidesIndex = i;
//     if (IdleRides[i].driverId) {
//      let dd = await  removeDriverFormRide(IdleRides[i]._id, IdleRides[i].driverId._id);
//     }

//     if (IdleRides[i].driverId == null) {
//         console.log('dddddddddddddddddddddddd');
//        let dd = await assignNewDriverToRide(IdleRides[i]);
//     }
// }

// })

// IdleRides = []
*/

        // console.log('IdleDrivers[0].idleDrivers', IdleDrivers[1].idleDrivers);
    }, {
        scheduled: true
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
    let discardedIndices = []
    let driverIndex;
    let matchedDriver = false;
    let index = IdleDrivers.findIndex((driver) => driver._id == ride._id);
    let drivers = IdleDrivers[index].idleDrivers
    let nearestdriverList = ride.nearestdriverList

    console.log('ride.nearestdriverList======.', ride.nearestdriverList);
    console.log('drivers=====>', drivers);



    if (nearestdriverList.length > 0) {
        console.log('inside the nearestdriverList.length conditon  00000000000000000000');

        OuterLoop:
        for (let i = 0; i < drivers.length; i++) {
            innerLoop:
            for (let j = 0; j < nearestdriverList.length; j++) {
                // if (
                //     // drivers[i]._id !== nearestdriverList[j]
                //     drivers[i]._id.toString() !== nearestdriverList[j].toString()
                // ) {
                //     driverIndex = i;
                //     let driver = await AssignRidToDriver(ride._id, drivers[i]._id);
                //     IdleDrivers[currentRidesIndex].driverId = driver
                //     break OuterLoop;
                // }
                // if (
                //     drivers[i]._id.toString() == nearestdriverList[j].toString()
                // ) {
                //     console.log('inside the match condition ', drivers[i].driverName);
                //     matchedDriver = true
                // }

                // console.log('drivers[i]._id.toString()', drivers[i]._id.toString());
                // console.log('nearestdriverList[j].toString()', nearestdriverList[j].toString());

                if (drivers[i]._id.toString() == nearestdriverList[j].toString()) {
                    console.log('matchedddddddddddddddddddddddddddddddddd');
                    discardedIndices.push(i);
                    console.log('discardedIndices', discardedIndices);
                    // if (driverIndex == i) {
                    //     driverIndex = null
                    //     discardedIndices.push(i);
                    // }
                    break innerLoop;
                }
                console.log('******************', drivers[i].driverName);
                driverIndex = i
                continue
                // break OuterLoop;
                //  else {
                //     console.log('not -- matchedddddddddddddddddddddddddddddddddd');
                //     let ind = discardedIndices.forEach((ind) => ind === i);
                //     if (ind == -1) {
                //         driverIndex = i
                //     }

                // }

                // if
                // let driver = await AssignRidToDriver(ride._id, drivers[i]._id);
                // IdleDrivers[currentRidesIndex].driverId = driver;
                // break OuterLoop;


            }
        }


        outer: for (let i = 0; i < drivers.length; i++) {
            // inner :for (let j = 0; j < discardedIndices.length; j++) {
            //     console.log('i', i);
            //     console.log('j', discardedIndices[j]);
            //     if (i == discardedIndices[j]) {
            //         break inner;
            //     }
            //     driverIndex = discardedIndices[j]
            //     console.log('driverIndex', driverIndex);
            //     break;
            // }

            let present = discardedIndices.includes(i)
            if (present) {
                continue
            } else if (!present) {
                driverIndex = i;
                console.log('driverinde', driverIndex);
            }


        }

        // //  if (drivers.length > 0) {
        // // if (!matchedDriver) {
        // console.log('drivers[driverIndex] ====>', drivers[driverIndex]);
        console.log('driverIndex', driverIndex);
        if (driverIndex) {

            let driver = await AssignRidToDriver(ride._id, drivers[driverIndex]._id);
            IdleDrivers[currentRidesIndex].driverId = driver;
            driverIndex = '';
        } else {

        }
        // }
        // matchedDriver = false
    } else {
        console.log('else blocak is called +++++++++++++++++++++');

        if (drivers.length > 0) {
            console.log('else blocak is called +++++++++++++++++++++');

            let driver = await AssignRidToDriver(ride._id, drivers[0]._id);

            IdleDrivers[currentRidesIndex].driverId = driver
        }
    }

    // driverIndex = ''
}


module.exports = { startCron }