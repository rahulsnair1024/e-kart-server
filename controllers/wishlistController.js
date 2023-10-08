//import wishlists collection/model
const wishlists = require('../models/wishlistschema')

//logic to add itens to wishlist
exports.addToWishlist  = async(req,res)=>{
    //destructuring
    //emp = {id:"1", name:"rahul"}
    // const {id,name} = emp
    // instead of emp.id we use id
    // get product details from req.body
    const {id,title,price,image} =  req.body

try{
 const item = await wishlists.findOne({id})
 //check product is available in wishlist
 if(item){
//product is avaliable
res.status(401).json("item already present in your wishlist")
 }
 else{
//product is unavailable , so
const newproduct = new wishlists({
    id,title,price,image
})
//save to db
await newproduct.save()
res.status(200).json("item added to your wishlist")
 }
}
catch(error){
 res.status(401).json(error)
}
}


// to get all items to wishlist
exports.getallwishlistitems = async (req,res)=>{
    //logic
  try{
    // to get all items from collection
    const allitems = await wishlists.find()
    if(allitems){
        res.status(200).json(allitems)
    }
    else{
        res.status(401).json("your wishlist is empty!!!!")
    }
  }
  catch(error){
    res.status(401).json(error)
  }

}


// remove item from wishlist
exports.removewishlistitem = async(req,res)=>{
  //logic
  //get product id from req url
  const {id} = req.params
  //check id is in collection
 try{
  const item = await wishlists.deleteOne({id})
  if(item){
  // get remaining item other than deleted one
  const allitems = await wishlists.find()
  res.status(200).json(allitems)
  }
  else{
    res.status(401).json("item is not in the wishlist")
  }
 }
 catch(error){
 res.status(401).json(error)
 }
}

 