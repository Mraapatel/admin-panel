const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

const driverSchema = new Schema({
    driverName: {
        type: String,
        required: true
    },
    driverProfile: {
        type: String,
        required: true,
    },
    driverEmail: {
        type: String,
        required: true,
        unique: true,
    },
    // countryCallingCode: {
    //     type: String,
    //     required: true,
    // },
    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cityZone',
        required: true,
    },
    driverPhone: {
        type: String,
        required: true,
        // unique: true,
    },
    serviceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicleType',
        default: null,
    },
    approveStatus: {
        type: Boolean,
        required: true
    }
});

const Driver = mongoose.model('DriverList', driverSchema);

const addDriver = async (req, res) => {
    try {

        if (req.body) {

            let cCid = new mongoose.Types.ObjectId(req.body.countryId)
            let existingCCAndP = await Driver.findOne({ $and: [{ countryId: cCid }, { driverPhone: req.body.driverPhone }] });

            console.log('yoooooooooo', existingCCAndP);
            if (existingCCAndP) {
                let errorMessage = '';
                console.log('called');
                errorMessage = 'Phone number already exists!';
                deleteUploadedFile(req.file.filename);
                return res.status(400).json({ error: errorMessage });
            }

            let countryId = new mongoose.Types.ObjectId(req.body.countryId);
            let cityId = new mongoose.Types.ObjectId(req.body.driverCity);
            let newDriver = {
                countryId: countryId,
                cityId: cityId,
                driverProfile: req.file.filename,
                driverName: req.body.driverName,
                driverEmail: req.body.driverEmail,
                // countryCallingCode: req.body.countryCallingCode,
                driverPhone: req.body.driverPhone,
                // serviceType: null,
                approveStatus: false
            }

            console.log(newDriver);

            let addedDriver = await Driver.create(newDriver);

            if (addedDriver) {

                let newUser = await Driver.aggregate([
                    {
                        $match: {
                            // _id:addedDriver._id
                            _id: new mongoose.Types.ObjectId(addedDriver._id)

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
                        $unwind: '$cityId'
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
                        $unwind: '$countryId'
                    }

                ])

                console.log('newly added user -----------', newUser[0]);
                return res.status(200).send(newUser[0], { message: 'added successfully' });
            }

            console.log('done');
        }

    } catch (e) {
        console.log(e);
        if (e.code === 11000) {
            const field = Object.keys(e.keyValue)[0];
            let errorMessage = '';
            if (field === 'driverEmail') {
                deleteUploadedFile(req.file.filename);
                errorMessage = 'Email already exists!';
            } else if (field === 'driverPhone') {
                deleteUploadedFile(req.file.filename);
                errorMessage = 'Phone number already exists!';
            }
            return res.status(400).json({ error: errorMessage });
        }
        console.log('Error:', e);
        return res.status(500).json({ error: 'Failed to add Driver' });
    }
}


const getDrivers = async (req, res) => {
    try {
        console.log('inside getDrivers---------------', req.body);
        const page = req.body.page || 1;
        const limit = 2;
        let sort
        let sortStuff;
        if (req.body.sort !== 'none') {
            let sort = req.body.sort;
            sortStuff = { [sort]: 1 }
            console.log(sortStuff);
        } else {
            sort = null
        }

        let totalDrivers

        let Drivers;
        const searchTerm = req.body.searchTerm;

        let query = {};

        if (searchTerm) {
            query = {
                $or: [
                    { driverName: { $regex: new RegExp(searchTerm, 'i') } },
                    { driverEmail: { $regex: new RegExp(searchTerm, 'i') } },
                    { driverPhone: { $regex: new RegExp(searchTerm, 'i') } },
                    //  { _id: searchTerm.toLowerCase()}
                ]
            };
        }

        // if (sort === 'driverName') {
        // sortStuff = { driverName: 1 }
        // Drivers = await Driver.find(query).collation({ locale: 'en', strength: 2 }).sort({ driverName: 1 }).skip((page - 1) * limit).limit(limit).populate('serviceType').populate('cityId');
        // console.log(Driver);

        // if (searchTerm) {
        //     totalDrivers = await Driver.find(query);
        // } else {
        //     totalDrivers = await Driver.countDocuments();
        // }
        // console.log(Drivers);
        // } else if (sort === 'driverEmail') {
        // sortStuff = { driverEmail: 1 }

        // Drivers = await Driver.find(query).sort({ driverEmail: 1 }).skip((page - 1) * limit).limit(limit).populate('serviceType').populate('cityId');
        // if (searchTerm) {
        //     totalDrivers = await Driver.countDocuments(query);
        // } else {
        //     totalDrivers = await Driver.countDocuments();
        // }
        // } else if (sort === 'driverPhone') {
        // sortStuff = { driverPhone: 1 }

        // Drivers = await Driver.find(query).sort({ driverPhone: 1 }).skip((page - 1) * limit).limit(limit).populate('serviceType').populate('cityId');
        // if (searchTerm) {
        //     totalDrivers = await Driver.countDocuments(query);
        // } else {
        //     totalDrivers = await Driver.countDocuments();
        // }
        // }

        const aggregateQuery = [
            { $match: query },
            // { $sort: sortStuff }, 
            { $skip: (page - 1) * limit },
            { $limit: limit },

            {
                $lookup: {
                    from: 'cityzones',
                    localField: 'cityId',
                    foreignField: '_id',
                    as: 'cityId'
                }
            },
            { $unwind: "$cityId" },
            {
                $lookup: {
                    from: 'countries',
                    localField: 'countryId',
                    foreignField: '_id',
                    as: 'countryId'
                }
            },
            {
                $unwind: '$countryId'
            }
        ];

        if (sort !== null) {
            // console.log('-------', sortStuff);
            aggregateQuery.unshift({ $sort: sortStuff });
        }

        // Drivers = await Driver.aggregate(aggregateQuery).collation({ locale: 'en', strength: 2 });
        Drivers = await Driver.aggregate(aggregateQuery).collation({ locale: 'en', strength: 2 });
        //     console.log('drivers in the get drivers ' , Drivers);
        // return 
        // if (sort === null) {
        // Drivers = await Driver.find(query).skip((page - 1) * limit).limit(limit).populate('serviceType').populate('cityId');
        // Drivers = await Driver.find(query).collation({ locale: 'en', strength: 2 }).sort(sortStuff).skip((page - 1) * limit).limit(limit).populate('serviceType').populate('cityId');

        // if (searchTerm) {
        //     totalDrivers = await Driver.countDocuments(query);
        // } else {
        //     totalDrivers = await Driver.countDocuments();
        // }
        // } else {
        //     Drivers = await Driver.find(query).collation({ locale: 'en', strength: 2 }).sort(sortStuff).skip((page - 1) * limit).limit(limit).populate('serviceType').populate('cityId');

        // }

        console.log('inside getDrivers---------------', Drivers);

        if (searchTerm) {
            totalDrivers = await Driver.countDocuments(query);
        } else {
            totalDrivers = await Driver.countDocuments();
        }
        if (Drivers.length === 0) {
            return res.status(400).json({ Message: 'There are no Drivers' });
        }

        return res.status(200).json({ totalDrivers: totalDrivers, Drivers: Drivers });
    } catch (e) {
        console.log('Error fetching drivers:', e);
        return res.status(500).json({ error: 'Failed to fetch drivers' });
    }
}

const updateDriver = async (req, res) => {
    try {
        console.log('got form the  req.body', req.body);
        const { id } = req.body

        let cCid = new mongoose.Types.ObjectId(req.body.countryId)
        let existingCCAndP = await Driver.findOne({ $and: [{ _id: { $ne: id } }, { countryId: cCid }, { driverPhone: req.body.driverPhone }] });

        console.log(existingCCAndP);
        if (existingCCAndP) {
            let errorMessage = '';
            errorMessage = 'Phone number already exists!';
            console.log('called');
            if (req.file) {
                deleteUploadedFile(req.file.filename);
            }
            return res.status(400).json({ error: errorMessage });
        }

        let updatedDriver

        console.log('--------------------');
        let cityId = new mongoose.Types.ObjectId(req.body.driverCity);
        let driverProfile = req.file ? req.file : undefined
        if (driverProfile) {
            let oldFileNameObj = await Driver.findById(id, { driverProfile: true, _id: false });
            let oldFileName = oldFileNameObj.driverProfile;
            updatedDriver = await Driver.findByIdAndUpdate(id,
                {
                    driverName: req.body.driverName,
                    driverEmail: req.body.driverEmail,
                    driverPhone: req.body.driverPhone,
                    driverProfile: req.file.filename,
                    cityId: cityId
                }, { new: true });

            //  let updated = await Driver.aggregate([
            //      {
            //          $match: {
            //              _id: new mongoose.Types.ObjectId(updatedDriver._id)
            //          }
            //      },
            //      {
            //          $lookup: {
            //              from: 'cityzones',
            //              localField: 'cityId',
            //              foreignField: '_id',
            //              as: 'cityL'
            //          }
            //      },
            //      {
            //          $addFields: {
            //              cityId: { $arrayElemAt: ['$cityL', 0] }
            //          }
            //      },
            //      {
            //          $project: {
            //              cityL: 0
            //          }
            //      }
            //  ])

            deleteUploadedFile(oldFileName);
            // return res.status(200).send(updated[0]);
        } else {
            updatedDriver = await Driver.findByIdAndUpdate(id,
                {
                    driverName: req.body.driverName,
                    driverEmail: req.body.driverEmail,
                    driverPhone: req.body.driverPhone,
                    cityId: cityId
                }, { new: true });

            console.log('----==========');
        }

        let updated = await Driver.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(updatedDriver._id)
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
                $unwind: '$cityId'
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
                $unwind: '$countryId'
            }
            //  {
            //     $addFields: {
            //         cityId: { $arrayElemAt: ['$cityL', 0] }
            //     }
            // },
            // {
            //     $project: {
            //         cityL: 0
            //     }
            // }
        ])



        return res.status(200).send(updated[0]);
    } catch (e) {
        console.log(e);
        if (e.code === 11000) {
            const field = Object.keys(e.keyValue)[0];
            let errorMessage = '';

            if (field === 'driverEmail') {
                errorMessage = 'Email already exists!';
                if (req.file) {
                    deleteUploadedFile(req.file.filename);
                }
            } else if (field === 'driverPhone') {
                errorMessage = 'Phone number already exists!';
            }
            return res.status(400).json({ error: errorMessage });
        }
        console.log('Error:', e);
        return res.status(500).json({ error: 'Failed to add driver' });
    }

}



const deleteDriver = async (req, res) => {
    try {

        // let stripCustomer = await Driver.findById(req.body.id, { _id: false, stripCustomerId: true });
        // let stripCustomerId = stripCustomer.stripCustomerId
        // console.log(stripCustomerId);

        // let deleted = await stripe.customers.del(stripCustomerId);
        // console.log(deleted);
        const deletedDriver = await Driver.findByIdAndDelete(req.body.id);
        console.log(req.body);
        if (!deletedDriver) {
            console.log('Driver not found.');
            return;
        }
        let fileName = deletedDriver.driverProfile;
        if (!fileName) {
            console.log('Profile image not found for the Driver.');
            return res.status(404).json({ message: 'Profile image not found for the Driver' });
        }


        // let profilePath = path.join(__dirname, '../public/driverProfile', fileName);

        // fs.unlink(profilePath, (error) => {
        //     if (error) {
        //         console.error('Error occurred while deleting image file', err);
        //         return res.status(500).send('Internal server error');
        //     }
        //     console.log('Image file deleted successfully');
        //     // return res.status(200).send('Document and image deleted successfully');
        // })
        deleteUploadedFile(fileName);

        // console.log('Driver deleted successfully:', deletedDriver);
        return res.status(200).json(deletedDriver, { message: 'Driver deleted successfully' })
    } catch (e) {
        console.log('Error fetching Driver:', e);
        return res.status(500).json({ error: 'Failed to fetch vehicles' });
    }
}


const addService = async (req, res) => {
    try {
        console.log(req.body);
        if (req.body) {
            const { driverId, serviceId } = req.body;

            // let previousData = await Driver.findById(driverId, { serviceType: true });
            if (!req.body.serviceId) {
                // let updatedDriver = await Driver.findByIdAndUpdate(driverId, { serviceType: null }, { new: true }).populate('cityId');
                let updatedDriver = await Driver.findByIdAndUpdate(driverId, { serviceType: null }, { new: true });
                console.log('service removed');
                console.log(updatedDriver);
                if (updatedDriver) {
                    //  let updated = await Driver.aggregate([
                    //      {
                    //          $match: {
                    //              _id: new mongoose.Types.ObjectId(updatedDriver._id)
                    //          }
                    //      },
                    //      {
                    //          $lookup: {
                    //              from: 'cityzones',
                    //              localField: 'cityId',
                    //              foreignField: '_id',
                    //              as: 'cityId'
                    //          }
                    //      },
                    //      {
                    //         $unwind:'$cityId'
                    //      }

                    //  ])
                    // console.log(updatedDriver);
                    let response = {
                        Driver: updatedDriver,
                        Message: 'Service removed Successfully'
                    }
                    res.status(200).json(response);
                }
            } else {
                let serviceid = new mongoose.Types.ObjectId(serviceId)

                // let updatedDriver = await Driver.findByIdAndUpdate(driverId, { serviceType: serviceid }, { new: true }).populate('cityId').populate('serviceType');
                let updatedDriver = await Driver.findByIdAndUpdate(driverId, { serviceType: serviceid }, { new: true });
                if (updatedDriver) {
                    // console.log('service added');
                    // console.log(updatedDriver);
                    // let updated = await Driver.aggregate([
                    //     {
                    //         $match: {
                    //             _id: new mongoose.Types.ObjectId(updatedDriver._id)
                    //         }
                    //     },
                    //     {
                    //         $lookup: {
                    //             from: 'cityzones',
                    //             localField: 'cityId',
                    //             foreignField: '_id',
                    //             as: 'cityL'
                    //         }
                    //     },
                    //     {
                    //         $lookup: {
                    //             from: 'vehicletypes',
                    //             localField: 'serviceType',
                    //             foreignField: '_id',
                    //             as: 'serviceTypeL'
                    //         }
                    //     },
                    //     {
                    //         $addFields: {
                    //             cityId: { $arrayElemAt: ['$cityL', 0] },
                    //             serviceType: { $arrayElemAt: ['$serviceTypeL', 0] }
                    //         }
                    //     },
                    //     {
                    //         $project: {
                    //             cityL: 0,
                    //             serviceTypeL: 0
                    //         }
                    //     }
                    // ])
                    console.log(updatedDriver);
                    let response = {
                        Driver: updatedDriver,
                        Message: 'Service Added Successfully'
                    }
                    res.status(200).json(response);
                }
            }
        }
        // else{
        //     console.log('error :');
        //     return res.status(400).json({ message: 'Not able to assign Service' });
        // }

    } catch (e) {
        console.log('Error Occured:', e);
        return res.status(500).json({ error: 'Failed to add service' });
    }
}




const approveDriver = async (req, res) => {
    try {
        console.log(req.body);
        if (req.body) {
            const { driverId, approveStatus } = req.body;
            let updatedDriver = await Driver.findByIdAndUpdate(driverId, { approveStatus: approveStatus }, { new: true });
            if (updatedDriver) {
                console.log("approveddriver --------", updatedDriver);
                let response = {
                    Driver: updatedDriver,
                    Message: 'updated successfully'
                }

                return res.status(200).json(response);
            } else {
                return res.status(404).json({
                    "error": "User Not Found",
                    "message": "The requested user could not be found in the database."
                });
            }
        } else {
            console.log('some unexprected error occured:');
            return res.status(400).json({ message: 'Some Error Occured' });
        }
    } catch (e) {
        console.log('Error occured:', e);
        return res.status(500).json({ error: 'Failed to set status' });
    }
}




function deleteUploadedFile(fileName) {
    console.log(fileName);
    if (!fileName) return;
    let profilePath = path.join(__dirname, '../public/driverProfile', fileName);
    fs.unlink(profilePath, (error) => {
        if (error) {
            console.error('Error occurred while deleting image file', error);
        } else {
            console.log('Image file deleted successfully');
        }
    });
}


module.exports = { Driver, addDriver, getDrivers, updateDriver, deleteDriver, addService, approveDriver }


// const deleteCard = async (req, res) => {
//     try {
//         console.log(req.body);
//         if (req.body) {
//             const { customerId, cardId } = req.body;
//             stripe.customers.deleteSource(customerId, cardId, (err, card) => {
//                 if (err) {
//                     console.log("some error occured", err);
//                 }
//                 if (card) {
//                     console.log(card);
//                     return res.status(200).json(card);
//                 } else {
//                     console.log('wtf');
//                 }
//             })
//         }
//     } catch (e) {
//         if (error.type === 'StripeCardError') {
//             console.error('Stripe Card Error:', error.message);
//         } else {
//             console.error('An error occurred while deleting the card:', error.message);
//         }
//     }
// }




