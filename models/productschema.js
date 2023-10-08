//define schema for product

//import mongoose
const mongoose = require('mongoose');

//using mongoose define schema
const productschema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    }
})

//create model using the above schema
const products = mongoose.model("products", productschema)

//model should be always lowercase and plural

//export model
module.exports = products