// logic to get all products from mongodb
//import products collection/model
const products = require('../models/productschema')

exports.getallproducts = async (req, res) => {
  //logic
  try {
    const allproducts = await products.find()
    console.log(allproducts);
    //send allproducts to client
    res.status(200).json(allproducts)
  }
  catch (error) {
    res.status(401).json(error)
  }
}

// logic to get a particukar product from mongodb

exports.viewproduct = async (req,res) => {
  // to get id of the product
  const id = req.params.id
  try {
    //logic
    const product = await products.findOne({id})
    // send product details to client
    res.status(200).json(product)
  }
  catch(error) {
    res.status(401).json(error)
  }
}