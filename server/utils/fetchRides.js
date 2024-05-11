const { createRide } = require('../models/createRide');
const mongoose = require('mongoose');

const getRidesFormDb = async (pages, rideLimit, sort, searchTerm, vehicleType, date) => {


    try {
        console.log('inside getRides---------------');
        const page = pages || 1; // Parse the page number from the query parameter, defaulting to 1 if it's not present
        const limit = rideLimit; // Set the number of documents to return per page
        // Parse the sort direction from the query parameter, defaulting to ascending
        let sortStuff
        if (sort !== 'none') {
            // sort = req.body.sort; // Parse the sort direction from the query parameter, defaulting to ascending
            // const sortT = sort
            if (sort == 'userName') {
                sortStuff = { [`userId.${sort}`]: 1 }
                console.log(' [`userId.${sort}`]', { [`userId.${sort}`]: 1 });
            } else {
                sortStuff = { [sort]: 1 }
                console.log('{ [sort]: 1 }', { [sort]: 1 });
            }

        } else {
            sort = null
        }

        let totalRides // Get the total number of documents in the collection

        let Rides;
        searchTerm;

        // let query = {};

        // // If searchTerm exists, add conditions to search for userName or userEmail
        // if (vechileType) {
        //     query['typeId._id'] = new mongoose.Types.ObjectId(vehicleType)
        // }
        // console.log('date======>' ,date);
        // if (date) {
        //     query.date = date
        // }

        // if (searchTerm) {
        //     query = {
        //         $or: [
        //             { 'userId.userName': { $regex: new RegExp(searchTerm, 'i') } },
        //             { 'userId.userEmail': { $regex: new RegExp(searchTerm, 'i') } },
        //             { 'userId.userPhone': { $regex: new RegExp(searchTerm, 'i') } },
        //             { date: { $regex: new RegExp(searchTerm, 'i') } },
        //         ]
        //     };
        // }
        let query = {};

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
                { date: { $regex: new RegExp(searchTerm, 'i') } }
            );
        }

        if (searchConditions.length > 0) {
            if (!query.$or) {
                query.$or = [];
            }
            query.$or = query.$or.concat(searchConditions);
        }

        console.log('query------>', query);


        const aggregateQuery = [
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
                $project: {
                    __v: 0,
                    'countryInfo.countryCode2': 0,
                    'countryInfo.flagSymbol': 0,
                    'countryInfo.timeZone': 0,
                    'countryInfo.countryCode': 0,
                    'countryInfo.__v': 0,
                    "userId.countryCallingCode": 0,
                    "userId.__v": 0,
                    'typeId.__v': 0
                    // 'countryInfo._id': 0,
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
                $addFields: {
                    driverId: { $arrayElemAt: ["$driverId", 0] } // Convert driverId array to object
                }
            },
            { $match: query },
            { $skip: (page - 1) * limit },
            { $limit: limit },
        ];


        if (sort !== null) {
            aggregateQuery.push({ $sort: sortStuff });
        }

        Rides = await createRide.aggregate(aggregateQuery).collation({ locale: 'en', strength: 2 });
        console.log('Rides.length,', Rides.length);

        if (searchTerm) {
            // totalRides = await createRide.countDocuments(query);
            totalRides = await createRide.countDocuments({ $and: [query, { $or: searchConditions }] });
            // totalRides = await createRide.countDocuments(query);
        } else {
            totalRides = await createRide.countDocuments(query);
        }
        console.log('totalRides', totalRides);

        return { totalRides: totalRides, Rides: Rides };
    } catch (e) {
        console.log('Error fetching Rides:', e);
        return { error: 'Failed to fetch Rides' };
    }


}

module.exports = { getRidesFormDb }