//define schema for product

//import mongoose
const mongoose = require('mongoose');

//using mongoose define schema
const wishlistschema = mongoose.Schema({
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
    image: {
        type: String,
        required: true
    }
 
})

//create model using the above schema
const wishlists = mongoose.model("wishlists", wishlistschema)

//model should be always lowercase and plural

//export model
module.exports = wishlists