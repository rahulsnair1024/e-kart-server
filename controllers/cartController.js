
// import cartitems collection/model
 const cartitems = require('../models/cartschema')

// to add item to cart
exports.addtocart = async(req,res)=>{
  //to get product properties from request body  
  const {id,title,price,image,quantity} = req.body
  //logic
  try{
   // check product is already in cart
   const product =  await cartitems.findOne({id})
   if(product){
     // product already in cart
     // increment quantity
     product.quantity+=1
     //update total price of the product
     product.grandTotal = product.price * product.quantity
     // to save in mongodb
     await product.save()
     // send res to client
     res.status(200).json("items added to the cart.......")
    }
   else{
    // product is not in the cart
    const newproduct = new cartitems({
     id,title,price,image,quantity,grandTotal:price
    })
    // save to mongodb
    await newproduct.save()
    // send res to client
    res.status(200).json("item added to the cart.......")
   }
  }
  catch(error){
  res.status(401).json(error)
  }
}

  //getCartitems
  exports.getCartitems = async (req,res)=>{
    //logic
    try{
      const allitems = await cartitems.find()
    //send allitems to client
    res.status(200).json(allitems)
    }
    catch(error){
     res.status(401).json(error)
    }
  }

  
  //remove an item from cart
  exports.removeCartitem = async(req,res)=>{
    // get id of product that should be removed
    const { id } = req.params
    //logic
    try{
    const removeitem = await cartitems.deleteOne({id})
    if(removeitem){
      //get remaining items other than deleted one from cart
     const allItems = await cartitems.find()
     res.status(200).json(allItems)
    }
    else{
      res.status(200).json("item is not in the cart")
    }
    }
    catch(error){
     res.status(401).json(error)
    }
  }


  //increment cart item

  exports.incrCartitem = async(req,res)=>{
    const {id}  = req.params
     //logic
     try{
     const item = await cartitems.findOne({id})
     if(item){
      item.quantity+=1
      item.grandTotal = item.price*item.quantity
      await item.save()
      //get all items from cart
      const allitems = await cartitems.find()
      res.status(200).json(allitems)
     }
     else{
      res.status(404).json("iten is not in the cart")
     }
     }
     catch(error){
     res.status(401).json(error)
     }
    }


    //decrement cart item
    exports.decrCartitem = async(req,res)=>{
      const {id}  = req.params
       //logic
       try{
       const item = await cartitems.findOne({id})
       if(item){
        item.quantity-=1
        if(item.quantity==0){
         //remove item from cart
         const deleteitem = await cartitems.deleteOne({id})
            //get all items from cart
            const allitems = await cartitems.find()
            res.status(200).json(allitems)
        }
        else{
          item.grandTotal = item.price*item.quantity
          await item.save()
         //get all items from cart
         const allitems = await cartitems.find()
         res.status(200).json(allitems)
        }
       }
       else{
        res.status(404).json("iten is not in the cart")
       }
       }
       catch(error){
       res.status(401).json(error)
       } 
      }



      //empty cart
      exports.emptycart = async(req,res)=>{
        //logic
        try{
        const result = await cartitems.deleteMany({})
        res.status(200).json("your Cart is Empty")
        }
        catch(error){
       res.status(401).json(error)
        }
      }

