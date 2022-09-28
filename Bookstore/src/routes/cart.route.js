import express from 'express';
import * as cartController from '../controllers/cart.controller';

const router = express.Router();

//route to add books to cart
router.post('/add/:_id', cartController.addToCart);

//route to remove books from cart
router.post('/remove/:_id', cartController.deleteBook);

//route to get all notes
router.get('/get',cartController.getBooksInCart);

export default router;