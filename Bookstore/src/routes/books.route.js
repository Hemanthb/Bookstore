import express from 'express';
import * as bookController from '../controllers/books.controller';

const router = express.Router();

//route to get all books
router.get('', bookController.getAllBooks);

//route to create a new book
router.post('', bookController.newBook);

//route to get a single book by their user id
router.get('/:_id', bookController.getBook);

//route to update a single book by their user id
router.put('/:_id', bookController.updateBook);

//route to delete a single user by their user id
router.delete('/:_id', bookController.deleteBook);

export default router;
