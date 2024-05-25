const { createRide } = require('../models/createRide');
const { Driver } = require('../controllers/driverList-controller');
const mongoose = require('mongoose');
const { getRidesFormDb } = require('../utils/fetchRides');
const { fetchIdleDrivers } = require('../utils/fetchIdleDrivers');

const getRides = async (req, res) => {
    try {
        let response = {
            message: 'Error occured',
        }
        if (req.body) {
            console.log('inside the confirmRide getRides ------->', req.body);
            // console.log(req.body);

            // return;
            let got = await getRidesFormDb(req.body.page, req.body.limit, req.body.searchTerm, req.body.vechicleType, req.body.date)
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

const getDrivers = async (req, res) => {
    let response = {
        message: 'Error occured',
        driverArray: []
    }
    try {

        console.log('inside the confirmride - getdrivers---->', req.body);
        let Drivers = await fetchIdleDrivers(req.body.cityId, req.body.typeId, req.body.rideStatus)
        /* 
        let Drivers = await Driver.aggregate(
            [
                {
                    $match: {
                        cityId: new mongoose.Types.ObjectId(req.body.cityId),
                        serviceType: new mongoose.Types.ObjectId(req.body.typeId),
                        approveStatus: true,
                        driverStatus: 0
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
                        'countryId.flagSymbol': 0,
                        'countryId.countryCode2': 0,
                        'countryId.countryCode': 0,
                        'countryId.timeZone': 0,
                        'countryId.__v': 0,
                    }
                }
            ]
        )
        */

        // global.ioInstance.emit('dakfja', 'broooooo  this is form the server ')
        // console.log('ioInstance----->',global.ioInstance);

        if (Drivers) {
            response.driverArray = Drivers;
            response.message = 'Driver fetched successfully'
            // console.log(Drivers);
            res.status(200).json(response);
        }

    } catch (e) {
        response.message = 'Some Error Occured while Feteching drivers'
        console.log('Error Occured while Feteching drivers', e);
        return res.status(400).json(response);
    }
}

const assignNearestDriver = async (req, res) => {
    try {

        if (req.body) {
            console.log('Inside the confirmRide -  assignNearestDriver ', req.body);
            // let time = new Date().getTime();

            let ride = await createRide.findByIdAndUpdate(req.body.rideId, {
                nearest: true, rideStatus: 1
            }, { new: true })

            if (ride) {
                return res.status(200).json({ message: 'The ride will be Assigned' });
            }
            return res.status(404).json({ message: 'Some Error occured while assigning ride' });
        }
    } catch (e) {
        response.message = 'Some Error Occured while Feteching drivers'
        console.log('Error Occured while Feteching drivers', e);
        return res.status(400).json(response);
    }
}

const cancleRide = async (req, res) => {
    try {

        if (req.body) {
            console.log('Inside the confirmRide -  cancleRide --> ', req.body);

            let ride = await createRide.findByIdAndUpdate(req.body.rideId, {
                nearest: false, rideStatus: 8
            }, { new: true })

            if (req.body.driverId) {
                 await Driver.findByIdAndUpdate(req.body.driverId, {
                    driverStatus: 0
                })
            }

            if (ride) {
                let data = {
                    rideStatus: ride.rideStatus,
                    rideId: ride._id
                }
                global.ioInstance.emit('rideCancledByAdmin', data)
                return res.status(200).json({ message: 'The ride cancled successfully', rideStatus: ride.rideStatus, rideId: ride._id });
            }
            return res.status(404).json({ message: 'Some Error occured while canceling ride' });
        }
    } catch (e) {
        response.message = 'Some Error occured at server while canceling ride'
        console.log('Error Occured while canceling ride', e);
        return res.status(500).json(response);
    }
}


const rideStarted = async (req, res) => {
    try {

        if (req.body) {
            console.log('Inside the confirmRide -  rideStarted --> ', req.body);
            // let time = new Date().getTime();

            let ride = await createRide.findByIdAndUpdate(req.body.rideId, {
                rideStatus: 4,
            }, { new: true })


            if (ride) {
                return res.status(200).json({ message: 'The rideStarted successfully', rideStatus: ride.rideStatus, rideId: ride._id });
            }
            return res.status(404).json({ message: 'Some Error occured while starting the ride' });
        }
    } catch (e) {
        response.message = 'Some Error occured while starting the ride'
        console.log('Error Occured while starting the ride', e);
        return res.status(400).json(response);
    }
}


const rideArrived = async (req, res) => {
    try {

        if (req.body) {
            console.log('Inside the confirmRide -  rideArrived --> ', req.body);
            // let time = new Date().getTime();

            let ride = await createRide.findByIdAndUpdate(req.body.rideId, {
                rideStatus: 2,
            }, { new: true })


            if (ride) {
                return res.status(200).json({ message: 'The rideArrived successfully', rideStatus: ride.rideStatus, rideId: ride._id });
            }
            return res.status(404).json({ message: 'Some Error occured while Assigning-- rideArrived' });
        }
    } catch (e) {
        response.message = 'Some Error occured while Assigning-- rideArrived'
        console.log('Error Occured while Assigning-- rideArrived', e);
        return res.status(400).json(response);
    }
}


const ridePicked = async (req, res) => {
    try {

        if (req.body) {
            console.log('Inside the confirmRide -  ridePicked --> ', req.body);
            // let time = new Date().getTime();

            let ride = await createRide.findByIdAndUpdate(req.body.rideId, {
                rideStatus: 3,
            }, { new: true })


            if (ride) {
                return res.status(200).json({ message: 'The ridePicked successfully', rideStatus: ride.rideStatus, rideId: ride._id });
            }
            return res.status(404).json({ message: 'Some Error occured while Assigning-- ridePicked' });
        }
    } catch (e) {
        response.message = 'Some Error occured while Assigning-- ridePicked'
        console.log('Error Occured while Assigning-- ridePicked', e);
        return res.status(400).json(response);
    }
}

const rideCompleted = async (req, res) => {
    try {

        if (req.body) {
            console.log('Inside the confirmRide -  rideCompleted --> ', req.body);
            // let time = new Date().getTime();

            let ride = await createRide.findByIdAndUpdate(req.body.rideId, {
                rideStatus: 7,
            }, { new: true })


            if (ride) {
                return res.status(200).json({ message: 'The rideCompleted successfully', rideStatus: ride.rideStatus, rideId: ride._id });
            }
            return res.status(404).json({ message: 'Some Error occured while completing ride' });
        }
    } catch (e) {
        response.message = 'Some Error occured while completing ride'
        console.log('Error Occured while completing ride', e);
        return res.status(400).json(response);
    }
}

module.exports = { getRides, getVehicleTypes, getDrivers, assignNearestDriver, cancleRide, rideStarted, rideArrived, ridePicked, rideCompleted }