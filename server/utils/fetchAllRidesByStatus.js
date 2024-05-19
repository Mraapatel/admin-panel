const { query } = require('express');
const { createRide } = require('../models/createRide');
const mongoose = require('mongoose');

let aggregateQuery = [
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
    // {
    //     $unwind: {
    //         path: "$driverId"
    //     }
    // },
    {
        $addFields: {
            driverId: { $arrayElemAt: ["$driverId", 0] } // Convert driverId array to object
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



const fetchAllRidesByStatus = async (rideStatus, nearest = false) => {

    console.log('cllkajfa');
    let localAggregateQuery
    let query = {};
    let time = new Date().getTime()

    if (nearest) {
        const aggregateForCron = [
            {
                $match: {
                    rideStatus: 1,
                    nearest: true
                }
            },
            {
                $lookup: {
                    from: "settings",
                    pipeline: [],
                    as: "settings"
                }
            },
            {
                $unwind: "$settings"
            },
            {
                $addFields: {
                    shouldCheckTime: {
                        $ne: ["$assignTime", null]
                    } // Flag to indicate whether to check time condition or not
                }
            },
            {
                $match: {
                    $expr: {
                        $cond: {
                            if: { $eq: ["$shouldCheckTime", true] }, // Check if shouldCheckTime is true
                            then: {
                                $gt: [
                                    {
                                        $subtract: [
                                            time,
                                            "$assignTime"
                                        ]
                                    },
                                    {
                                        $multiply: [
                                            {
                                                $ifNull: [
                                                    "$settings.TimeOut",
                                                    20
                                                ]
                                            }, // If settings.TimeOut exists, use its value, otherwise use 20 as default
                                            1000
                                        ]
                                    }
                                ]
                            },
                            else: { $eq: [1, 1] } // This condition will always be true, meaning the $match stage is skipped
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "driverlists",
                    let: {
                        nearestdriverList: "$nearestdriverList",
                        typeId: "$typeId",
                        cityId: "$cityId"
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        {
                                            $not: {
                                                $in: [
                                                    "$_id",
                                                    "$$nearestdriverList"
                                                ]
                                            }
                                        },
                                        {
                                            $eq: ["$driverStatus", 0]
                                        },
                                        {
                                            $eq: ["$serviceType", "$$typeId"]
                                        },
                                        {
                                            $eq: ["$cityId", "$$cityId"]
                                        }
                                    ]
                                }
                            }
                        },
                        {
                            $project: {
                                _id: 1
                            }
                        }
                    ],
                    as: "notAssigndDrivers"
                }
            },
            {
                $project: {
                    _id: 1,
                    notAssigndDrivers: '$notAssigndDrivers._id',
                    driverId: 1
                }
            }
        ]

        const assignedRidesWithDrivers = await createRide.aggregate(aggregateForCron);

        console.log('asssigne', assignedRidesWithDrivers);
        // console.log(assignedRidesWithDrivers);
        return assignedRidesWithDrivers
    } else {
        query = {
            $match: {
                rideStatus: rideStatus,
            }
        }

        localAggregateQuery = aggregateQuery

        localAggregateQuery.unshift(query);
        const assignedRidesWithDrivers = await createRide.aggregate(localAggregateQuery);
        localAggregateQuery.splice(0, 1)

        // console.log('asssigne', assignedRidesWithDrivers);
        return assignedRidesWithDrivers
    }


}



const fetchSinglRideInfo = async (rideId) => {
    console.log('ride id in fetchsingle', rideId);
    try {
        if (rideId) {
            let query = {
                $match: {
                    _id: mongoose.Types.ObjectId(rideId),
                }
            }
            let locacAggregateQuery = aggregateQuery
            locacAggregateQuery.unshift(query)

            let rideInfo = await createRide.aggregate(aggregateQuery)

            locacAggregateQuery.splice(0, 1);

            return rideInfo[0]
        }
    } catch (e) {
        return null
    }
}


module.exports = { fetchAllRidesByStatus, fetchSinglRideInfo }