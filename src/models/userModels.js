const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "FirstName is required"]
    },
    lastname: {
        type: String,
        required: [true, "LastName is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    country: {
        type: String,
        required: [true, "Country is required"]
    },
    state: {
        type: String,
        required: [true, "State is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    },
    date_of_birth: {
        type: String,
        required: [true, "Age is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    }
})







module.exports = mongoose.model("UsersData", userSchema)



