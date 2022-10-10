import express from "express";
import * as wishlistController from '../controllers/wishlist.controller';

const router = express.Router();

//creating the wishlist
router.post('/:_id',wishlistController.addToWishlist)

//get all books from wishlist
router.get('',wishlistController.getFromWishlist)

//removing the book from wishlist
router.delete('/:_id',wishlistController.removeBook)

export default router;