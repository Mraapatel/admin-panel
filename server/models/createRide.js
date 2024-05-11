const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const createRideSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    totalFare: {
        type: Number,
        required: true
    },
    route: {
        type: [String],
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    totalDistance: {
        type: Number,
        required: true
    },
    totalTime: {
        type: Number,
        required: true
    },
    totalFare: {
        type: Number,
        required: true
    },
    startLocation: {
        type: String,
        required: true
    },
    endLocation: {
        type: String,
        required: true
    },
    timeInString: {
        type: String,
        required: true
    },
    rideStatus: {
        type: Number,
        default: null,
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
})

const createRide = mongoose.model('createrides', createRideSchema);

module.exports = { createRide };