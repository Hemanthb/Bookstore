import HttpStatus from 'http-status-codes';
import * as BookService from '../services/books.service'

/**
 * Controller to get all books available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooks = async (req, res, next) => {
  try {
    const data = await BookService.getAllBooks();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Books fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBook = async (req, res, next) => {
  try {
    const data = await BookService.getBook(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newBook = async (req, res, next) => {
  try {
    const data = await BookService.newBook(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Book created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a Book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateBook = async (req, res, next) => {
  try {
    const data = await BookService.updateBook(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Book updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteBook = async (req, res, next) => {
  try {
    await BookService.deleteBook(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Book deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
