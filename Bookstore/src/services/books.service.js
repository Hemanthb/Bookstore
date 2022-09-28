import Book from '../models/books.model';
import bcrypt from 'bcrypt'; 

//get all books
export const getAllBooks = async () => {
  const data = await Book.find();
  console.log(data);
  return data;
};

//create new book
export const newBook = async (body) => {
  const data = await Book.create(body);
  return data;
  
};

//update a book
export const updateBook = async (_id, body) => {
  const data = await Book.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete a book
export const deleteBook = async (id) => {
  await Book.findByIdAndDelete(id);
  return '';
};

//get details of a book
export const getBook = async (id) => {
  const data = await Book.findById(id);
  return data;
};
