
const { createRide } = require('../models/createRide');
const mongoose = require('mongoose')

const runnigRequest = async (rideId, driverId, status) => {
    // let query

    // if (status == 0) {
    //     query = [
    //         {
    //             $match: {
    //                 _id: new mongoose.Types.ObjectId(rideId)
    //             }
    //         },
    //         {
    //             $set: {
    //                 rideStatus: 0
    //             }
    //         }
    //     ];
    // } else {
    //     query = [
    //         {
    //             $match: {
    //                 rideStatus: 0
    //             }
    //         }
    //     ]
    // }

    await createRide.findByIdAndUpdate(rideId, { rideStatus: status, driverId: new mongoose.Types.ObjectId(driverId) })

    const aggregateQuery = [
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
                as: "driverId"
            }
        },
        {
            $unwind: {
                path: "$driverId"
            }
        },
        {
            $match: {
                'driverId._id': new mongoose.Types.ObjectId(driverId)
            }
        },
        {
            $project: {
                "driverId.countryId": 0,
                "driverId.cityId": 0,
                "driverId.serviceType": 0,
                "driverId.__v": 0,
                "userId.countryCallingCode": 0,
                "userId.__v": 0,
                'typeId.__v': 0,
                __v: 0,
            }
        }
    ]

    // aggregateQuery.unshift(...query)

    const assignedRideWithDriver = await createRide.aggregate(aggregateQuery)

    console.log('inside the runningRequest-controller--------->', assignedRideWithDriver);
    // if (status == 0) {
    //     return assignedRideWithDriver
    // } else {
    return assignedRideWithDriver[0]
    // }
}
const allRunnigRequest = async (status) => {

    const aggregateQuery = [
        {
            $match: {
                rideStatus: 0
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
            $unwind: "$countryInfo"
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
                localField: "driverId",
                foreignField: "_id",
                as: "driverId"
            }
        },

        {
            $unwind: {
                path: "$driverId"
            }
        },
        {
            $project: {
                "driverId.countryId": 0,
                "driverId.cityId": 0,
                "driverId.serviceType": 0,
                "driverId.__v": 0,
                "userId.countryCallingCode": 0,
                "userId.__v": 0,
                "typeId.__v": 0,
                __v: 0
            }
        }
    ]

    const assignedRidesWithDrivers = await createRide.aggregate(aggregateQuery)

    console.log('inside the runningRequest-controller--------->', assignedRidesWithDrivers);

    return assignedRidesWithDrivers

}

module.exports = { runnigRequest, allRunnigRequest }