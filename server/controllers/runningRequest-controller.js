
const { createRide } = require('../models/createRide');
const mongoose = require('mongoose')

const runnigRequest = async (rideId, driverId) => {

    const assignedRideWithDriver = await createRide.aggregate(
        [
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(rideId)
                }
            },
            {
                $lookup: {
                    from: "vehicletypes",
                    localField: "typeId",
                    foreignField: "_id",
                    as: "typeId"
                }
            },
            {
                $unwind: "$typeId"
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userId"
                }
            },
            {
                $unwind: "$userId"
            },
            {
                $lookup: {
                    from: "countries",
                    localField: "userId.countryCallingCode",
                    foreignField: "_id",
                    as: "countryInfo"
                }
            },
            {
                $unwind: {
                    path: "$countryInfo"
                }
            },
            {
                $project: {
                    "countryInfo.flagSymbol": 0,
                    "countryInfo.countryCode2": 0,
                    "countryInfo.countryCode": 0,
                    "countryInfo.timeZone": 0,
                    "countryInfo.__v": 0
                }
            },
            {
                $lookup: {
                    from: "driverlists",
                    localField: "countryInfo._id",
                    foreignField: "countryId",
                    as: "driver"
                }
            },
            {
                $unwind: {
                    path: "$driver"
                }
            },
            {
                $match: {
                    'driver._id': new mongoose.Types.ObjectId(driverId)
                }
            },
            {
                $project: {
                    "driver.countryId": 0,
                    "driver.cityId": 0,
                    "driver.serviceType": 0,
                    "driver.__v": 0,
                    "userId.countryCallingCode": 0,
                    "userId.__v": 0,
                    'typeId.__v': 0,
                    __v: 0,
                }
            }
        ]
    )

    console.log('inside the runningRequest-controller--------->',assignedRideWithDriver );
    return assignedRideWithDriver[0]
}

module.exports = { runnigRequest }