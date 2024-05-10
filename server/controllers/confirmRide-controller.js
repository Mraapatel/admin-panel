const { createRide } = require('../models/createRide');
const { Driver } = require('../controllers/driverList-controller');
const mongoose = require('mongoose')

// const { getIOInstance } = require('../middlewares/socket-io');
// const io = require('socket.io');
const { getRidesFormDb } = require('../utils/fetchRides');

const getRides = async (req, res) => {
    try {
        let response = {
            message: 'Error occured',
            rideInfo: {}
        }
        if (req.body) {
            console.log('inside the confirmRide getRides ------->', req.body);
            // console.log(req.body);

            // return;
            let got = await getRidesFormDb(req.body.page, req.body.limit, req.body.sort, req.body.searchTerm, req.body.vechicleType, req.body.date)
            console.log('got-------->', got);

            return res.status(200).json(got);
        } else {
            response.message = 'Some Error Occured while storing Ride'
            return res.status(400).json(response);
        }
    } catch (e) {
        console.log('error while storing ride details', e);

    }
}

const getVehicleTypes = async (req, res) => {
    try {
        let response = {
            message: 'Error occured',
            TypesArray: []
        }
        console.log('inside the confirmRide getVehicleTypes ------->', req.body);
        let vehicleType = await createRide.aggregate([
            {
                $group: {
                    _id: "$typeId"
                }
            },
            {
                $lookup: {
                    from: "vehicletypes",
                    localField: "_id",
                    foreignField: "_id",
                    as: "type"
                }
            },
            {
                $unwind: {
                    path: "$type"
                }
            },
            {
                $project: {
                    _id: 0,
                    'type.__v': 0
                }
            }
        ]);

        if (vehicleType) {
            vehicleType.forEach((type) => {
                response.TypesArray.push(type.type);
            });
            response.message = 'Feteched vehicletypes'
        }


        return res.status(200).json(response);

    } catch (e) {
        response.message = 'Some Error Occured while Feteching vehicleTypes'
        console.log('Error Occured while Feteching vehicleTypes', e);
        return res.status(400).json(response);

    }
}

const getDrivers = async (cityId, typeId) => {
    console.log('socket io works');
    console.log('got data', cityId, "and ", typeId);

    let Drivers = await Driver.aggregate(
        [
            {
                $match: {
                    cityId: new mongoose.Types.ObjectId(cityId),
                    serviceType: new mongoose.Types.ObjectId(typeId),
                    approveStatus: true
                }
            },
            {
                $lookup: {
                    from: 'cityzones',
                    localField: 'cityId',
                    foreignField: '_id',
                    as: 'cityId'
                }
            },
            {
                $unwind: {
                    path: '$cityId',
                }
            },
            {
                $lookup: {
                    from: 'countries',
                    localField: 'countryId',
                    foreignField: '_id',
                    as: 'countryId'
                }
            },
            {
                $unwind: {
                    path: '$countryId',
                }
            },
            {
                $project: {
                    __v: 0,
                    'cityId.place_id': 0,
                    'cityId.coordinates': 0,
                    'cityId.__v': 0,
                    'cityId.countryId': 0,
                    'countryId.flagSymbol':0,
                    'countryId.countryCode2':0,
                    'countryId.countryCode':0,
                    'countryId.timeZone':0,
                    'countryId.__v':0,
                }
            }
        ]
    )

    return Drivers

}

module.exports = { getRides, getVehicleTypes, getDrivers }