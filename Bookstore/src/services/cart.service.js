import Cart from '../models/cart.model';
import Book from '../models/books.model';

export const createCart = async(_id,body) => {

    const bookDetails = await Book.findById(_id);
    console.log(bookDetails);
    let book = {
        'productId': bookDetails._id,
        'bookName': bookDetails.bookName,
        'description': bookDetails.description,
        'author': bookDetails.author,
        'price': bookDetails.price,
        'bookImage': bookDetails.bookImage,
    }
    console.log(book);
    if(bookDetails){
        const cartExist = await Cart.findOne({userId:body.userId});
        console.log("cart ---- "+cartExist);
        if(cartExist!=null){
            //console.log(cartExist.find({book:{$get:{productId}}}));
            //if(Cart.find({books:{$elemMatch:{productId:book.productId}}})){
            cartExist.books.forEach(data => {
                if (data.productId == _id) {
                    data.quantity = data.quantity + 1;
                    }
                });
                cartExist.books.push(book);
                const updatebook = Cart.findOneAndUpdate({userId: body.userId}, { books: cartExist.books}, { new: true });
                return updatebook;
                //cartExist.books.push(book);
                //console.log("-----------");
                //const updateBook = await Cart.findOneAndUpdate({"books.productId":book.productId},{$set:{$inc:{"books.quantity":1}}},{new:true});
                //const updateBook = await Cart.findOneAndUpdate({userId:body.userId},{$inc:{"books.quantity":1}},{arrayFilters: [{ "books.productId": { $eq: book.productId }}]});
            
            
            /* cartExist.books.push(book);
            const addBook = await Cart.findOneAndUpdate({userId: body.userId}, { books: cartExist.books}, { new: true });
            return addBook;  */ 
        }else{
            const newCart = await Cart.create({userId: body.userId, books:[book] })
            return newCart;
        }
    }else{
        throw new Error("Book doesn't exist!");
    }

}

//Remove book from the cart
export const removeBook = async (_id, body) => {
    const cartExist = await Cart.findOne({ userId: body.userId })
    if (cartExist) {
        cartExist.books.forEach(data => {
            if (data.productId == _id) {
                cartExist.books.splice(cartExist.books.indexOf(data),1);
                }
            });
        //console.log(cartExist.books);
        //cartExist.books = cartExist.books.filter(item => item.productId !== _id)
        //console.log(cartExist.books);
        const updatebook = Cart.findOneAndUpdate({ userId: body.userId }, { books: cartExist.books }, { new: true });
        return updatebook;
    }
    else {
        throw new Error("Cart does not exist")
    }

}

//get all books from cart
export const getBooksInCart = async (_id,body) => {
    const getBooks = await Cart.findOne({ userId:body.userId  })
    if (getBooks) {
        return getBooks;
    } else {
        throw new Error("No books in the cart")
    }
  }