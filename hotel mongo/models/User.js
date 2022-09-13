const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: { type: Number },
    description: { type: String },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    address: addressSchema,
    contact: String
})

module.exports = mongoose.model("User", userSchema)