import React, { createContext, useState } from "react";
import axios from "axios";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Fetch books from the server
  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://bookmanagerbackend-5aw5.onrender.com/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Add a book
  const addBook = async (book) => {
    try {
      const response = await axios.post("https://bookmanagerbackend-5aw5.onrender.com/books", book);
      if (response.status === 200) {
        fetchBooks(); // Refresh the book list after adding
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
