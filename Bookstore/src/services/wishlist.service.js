import wishlist from '../models/wishlist.model';
import Book from '../models/books.model';

//creating a wishlist and adding book
export const addToWishlist = async (_id, body) => {
    const checkBook = await Book.findById({ _id: _id })
    console.log(checkBook);
    if (checkBook) {
        let book = {
            'bookName': checkBook.bookName,
            'description': checkBook.description,
            'author': checkBook.author,
            'price': checkBook.price,
            'bookImage': checkBook.bookImage,
            'productId': checkBook._id,
        }
        const wishlistCheck = await wishlist.findOne({ userId: body.userId })

        if (wishlistCheck) {
            wishlistCheck.books.push(book)
            const addBooks = await wishlist.findOneAndUpdate({ userId: body.userId }, { books: wishlistCheck.books }, { new: true });
            return addBooks;
        } else {
            const createWishlist = await wishlist.create({ userId: body.userId, books: [book] })
            return createWishlist;
        }
    }
    else {
        throw new Error("Book does not exists");
    }
}


//get all books from wishlist
export const getFromWishlist = async (_id, body) => {
    const getBooks = await wishlist.findOne({ userId: body.userId })
    if (getBooks) {
        return getBooks;
    } else {
        throw new Error("No Books in wishlist!")
    }
}

//remove book from wishlist
export const removeBook = async (_id, body) => {
    const checkWishlist = await wishlist.findOne({ userId: body.userId })
    if (checkWishlist) {
        checkWishlist.books.forEach(data => {
            if (data.productId == _id) {
                let indexval = checkWishlist.books.indexOf(data)
                checkWishlist.books.splice(indexval, 1)
            }
        });
        const updatebook = wishlist.findOneAndUpdate({ userId: body.userId }, { books: checkWishlist.books }, { new: true });
        return updatebook;
    }
    else {
        throw new Error("wishlist does not exist")
    }

}