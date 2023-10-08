  //import express
 const express = require('express')
 //Router()
 const router = new express.Router()
 // import productcontroller
 const productController = require('../controllers/productController')
 // import wishlistcontroller
 const wishlistController = require('../controllers/wishlistController')
 //import cartController
 const cartController = require('../controllers/cartController')

 //get-all-products api
 //router.http-request(path,callback to define logic to resolve api)
 router.get('/products/get-all-products',productController.getallproducts)

 //router for single product details
 router.get('/products/:id',productController.viewproduct)

 //route for add to wishlist
 router.post('/products/add-to-wishlist',wishlistController.addToWishlist)

//route for get all wishlist items
router.get('/wishlists/get-all-items',wishlistController.getallwishlistitems)

//route for removing an iten from wishlist
router.delete('/wishlists/remove-item/:id',wishlistController.removewishlistitem)

//route for add to cart
router.post('/products/add-to-cart',cartController.addtocart)

//route for get all cart items
router.get('/cart/get-all-items',cartController.getCartitems)

//route for remove item from cart
router.delete('/cart/item/:id',cartController.removeCartitem) 

//route for incrementing cartitem quantity
router.get('/cart/increment-item/:id',cartController.incrCartitem)

//route for decrementing cartitem quantity
router.get('/cart/decrement-item/:id',cartController.decrCartitem)

//route for empty cart
router.delete('/cart/empty-cart',cartController.emptycart)


 //export router
 module.exports = router