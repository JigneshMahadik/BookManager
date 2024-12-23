import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookContext } from "../Services/BookProvider";

const BookList = () => {
  const { books, fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, [fetchBooks]);

  return (
    <div className="container mt-4">
      <h3>List of Books</h3>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
