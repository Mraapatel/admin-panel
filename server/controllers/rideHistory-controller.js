const mongoose = require('mongoose');
const { createRide } = require('../models/createRide');


const getRides = async (req, res) => {
    let response = {
        message: 'Some Error Occured in While fetching the rides',
        rides: []
    }
    try {
        let date = req.body.date;
        let vehicleType = req.body.vechicleType
        let searchTerm = req.body.searchTerm;
        let rideStatus = req.body.rideStatus;
        console.log('inside the ridehistory  - getride--->', req.body);

        let query = {}

        if (rideStatus) {
            query = {
                rideStatus: { $in: [rideStatus] } // Always exclude rideStatus 7 and 8
            };
        } else {
            let query = {
                rideStatus: { $in: [7, 8] } // Always exclude rideStatus 7 and 8
            };
        }



        if (vehicleType) {
            query['typeId._id'] = new mongoose.Types.ObjectId(vehicleType);
        }
        console.log('date======>', date);
        if (date) {
            query.date = date;
        }

        let searchConditions = [];
        if (searchTerm) {
            searchConditions.push(
                { 'userId.userName': { $regex: new RegExp(searchTerm, 'i') } },
                { 'userId.userEmail': { $regex: new RegExp(searchTerm, 'i') } },
                { 'userId.userPhone': { $regex: new RegExp(searchTerm, 'i') } },
                { 'driverId.driverPhone': { $regex: new RegExp(searchTerm, 'i') } },
                { 'driverId.driverEmail': { $regex: new RegExp(searchTerm, 'i') } },
                { 'driverId.driverName': { $regex: new RegExp(searchTerm, 'i') } },
                { date: { $regex: new RegExp(searchTerm, 'i') } },
                { startLocation: { $regex: new RegExp(searchTerm, 'i') } }, // Example for another field
                { endLocation: { $regex: new RegExp(searchTerm, 'i') } }, // Example for another field
                { paymentMethod: { $regex: new RegExp(searchTerm, 'i') } }, // Example for another field
                // { 'driverId.driverName': { $regex: new RegExp(searchTerm, 'i') } }
            );
        }

        if (searchConditions.length > 0) {
            if (!query.$or) {
                query.$or = [];
            }
            query.$or = query.$or.concat(searchConditions);
        }

        const aggregateQuery = [
            {
                $match: {
                    rideStatus: {
                        $in: [7, 8]
                    }
                }
            },
            {
                $lookup: {
                    from: 'vehicletypes',
                    localField: 'typeId',
                    foreignField: '_id',
                    as: 'typeId'
                }
            },
            {
                $unwind: '$typeId'
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userId'
                }
            },
            {
                $unwind: '$userId'
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
                $unwind: '$countryInfo',

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
                $addFields: {
                    driverId: { $arrayElemAt: ["$driverId", 0] } // Convert driverId array to object
                }
            },
            {
                $project: {
                    __v: 0,
                    _id: 0,
                    time: 0,
                    assignTime: 0,
                    nearestdriverList: 0,
                    // rideStatus: 0,
                    'countryInfo.countryCode2': 0,
                    'countryInfo.flagSymbol': 0,
                    'countryInfo.timeZone': 0,
                    'countryInfo.countryCode': 0,
                    'countryInfo.__v': 0,
                    'countryInfo._id': 0,
                    "userId.countryCallingCode": 0,
                    "userId.stripCustomerId": 0,
                    "userId._id": 0,
                    "driverId._id": 0,
                    "driverId.cityId": 0,
                    "driverId.countryId": 0,
                    "driverId.driverStatus": 0,
                    "driverId.approveStatus": 0,
                    "driverId.bankDetailsAdded": 0,
                    "driverId.driverStripCustomerId": 0,
                    "driverId.serviceType": 0,
                    "driverId.__v": 0,
                    "userId.__v": 0,
                    'typeId.__v': 0,
                    'typeId._id': 0,
                    'typeId.vehicleIcon': 0,
                    'cityId': 0,


                }
            },
            { $match: query },

            // { $skip: (page - 1) * limit },
            // { $limit: limit },
        ];

        let rides = await createRide.aggregate(aggregateQuery)
        console.log('rides fetched', rides);

        if (rides.length > 0) {
            response.rides = rides;
            response.message = 'Rides Fetched Successfully';
            return res.status(200).json(response)
        }

        response.message = 'Currently No rides are available'
        return res.status(404).json(response)


    } catch (e) {
        console.log('Some Erorr Occured in ridehistory controller -getRides', e);
        return res.status(500).json(response)
    }
}

module.exports = { getRides }