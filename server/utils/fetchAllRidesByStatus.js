const { createRide } = require('../models/createRide');
const mongoose = require('mongoose');

const fetchAllRidesByStatus = async (rideStatus) => {
    const aggregateQuery = [
        {
            $match: {
                rideStatus: rideStatus
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

    const assignedRidesWithDrivers = await createRide.aggregate(aggregateQuery);

    return assignedRidesWithDrivers

}


module.exports = { fetchAllRidesByStatus }