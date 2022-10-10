import HttpStatus from 'http-status-codes';
import * as wishlistService from '../services/wishlist.service';

export const addToWishlist = async (req, res, next) => {
    try {
      const data = await wishlistService.addToWishlist(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to wishlist successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const getFromWishlist = async (req, res, next) => {
    try {
      const data = await wishlistService.getFromWishlist(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched all books successfully from wishlist'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const removeBook = async (req, res, next) => {
    try {
      const data = await wishlistService.removeBook(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book removed Successfully from wishlist'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:'Book does not exist'
    })
  }
  };