import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to create cart and add books
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addToCart = async (req, res, next) => {
  try {
    const data = await CartService.createCart(req.params._id, req.body);
    console.log("controller-" + data);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Book added to cart successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to remove book from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteBook = async (req, res, next) => {
  try {
    const data = await CartService.removeBook(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book Removed from cart Successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'Book does not exist!'
    })
  }
};

/**
 * Controller to get books from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBooksInCart = async (req, res, next) => {
  try {
    const data = await CartService.getBooksInCart(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Fetched all books successfully from cart'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message:`${error}`
  })
}
};
