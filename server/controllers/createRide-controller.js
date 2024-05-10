const { createRide } = require('../models/createRide');
const { getIOInstance } = require('../middlewares/socket-io');
const io = getIOInstance();
const { getRidesFormDb } = require('../utils/fetchRides');


const storeRide = async (req, res) => {
    try {
        let response = {
            message: 'Error occured',
            rideInfo: {}
        }
        console.log('inside the createRide get sotreRide ------->');
        if (req.body) {
            console.log(req.body);
            let newRide = {
                userId: req.body.userId,
                typeId: req.body.typeId,
                cityId:req.body.cityId,
                date: req.body.date,
                time: req.body.time,
                totalFare: req.body.totalFare,
                route: req.body.route,
                paymentMethod: req.body.paymentMethod,
                totalDistance: req.body.totalDistance,
                totalTime: req.body.totalTime,
                startLocation: req.body.startLocation,
                endLocation: req.body.endLocation,
                timeInString: req.body.timeInString,
                
            }

            let saved = await createRide.create(newRide);


            if (saved) {
                response.rideInfo = saved;
                response.message = 'Ride saved successfully'
            }
            return res.status(200).json(response);
        } else {
            response.message = 'Some Error Occured while storing Ride'
            return res.status(400).json(response);
        }


    } catch (e) {
        console.log('error while storing ride details', e);

    }
}


const getRides = async (req, res) => {
    try {
        let response = {
            message: 'Error occured',
            rideInfo: {}
        }
        if (req.body) {
            console.log('inside the createRide getRides ------->', req.body);
            // console.log(req.body);

            // return;
            let got = await getRidesFormDb(req.body.page, req.body.limit, req.body.sort, req.body.searchTerm, req.body.vechicleType ,req.body.date)
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
        console.log('inside the createRide getVehicleTypes ------->', req.body);
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
             vehicleType.forEach((type) =>{
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

module.exports = { storeRide, getRides, getVehicleTypes }