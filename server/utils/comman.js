
const { Driver } = require('../controllers/driverList-controller');
const mongoose = require('mongoose');
const { createRide } = require('../models/createRide');

const AssignRidToDriver = async (rideId, driverId, rideStatus = 1) => {

    let date = new Date()
    let time = date.getTime();
    await createRide.findByIdAndUpdate(rideId, {
        assignTime: time,
        rideStatus: rideStatus,
        driverId: new mongoose.Types.ObjectId(driverId),
        $push: { nearestdriverList: new mongoose.Types.ObjectId(driverId) }
    })

    let updatedDriver = await Driver.findByIdAndUpdate(driverId, { driverStatus: 1 }, { new: true })
    return updatedDriver
}


const removeDriverFormRide = async (rideId, driverId) => {
    try {
        if (rideId) {
            await createRide.findByIdAndUpdate(rideId, { driverId: null });
            await Driver.findByIdAndUpdate(driverId, { driverStatus: 0 })
            return true;
        }
    } catch (e) {
        return false;
    }

}

module.exports = { AssignRidToDriver, removeDriverFormRide }