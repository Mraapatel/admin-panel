
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

const updateRideAndDriverModal = async (rideIds, driverIds) => {
    try {
        console.log(
            'rideId',rideIds
        );
        const filter1 = { _id: { $in: rideIds } }

        const update1 = {
            $set: {
                rideStatus: 0,
                driverId: null
            }
        }

        let rideUpdateResult = await createRide.updateMany(filter1, update1);
        console.log(`${rideUpdateResult.modifiedCount} ride documents updated.`)

        const filter2 = { _id: { $in: driverIds } }

        const update2 = {
            $set: {
                driverStatus: 0
            }
        }

        let driverUpdateResult = await Driver.updateMany(filter2, update2);
        console.log(`${driverUpdateResult.modifiedCount} driver documents updated.`)
        return;
    } catch (error) {
        // Handle error
        console.error('Error updating documents:', error)
    }

}


// const fetchSinglRideInfo = async (rideId)=>{
//     try{
//         if(rideId){
//             let rideInfo = await createRide.aggregate
//         }
//     }catch (e){
//         return null
//     }
// }

module.exports = { AssignRidToDriver, removeDriverFormRide, updateRideAndDriverModal }