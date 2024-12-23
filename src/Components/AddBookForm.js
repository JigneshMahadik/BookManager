import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookContext } from "../Services/BookProvider";

const AddBookForm = () => {
  const [formData, setFormData] = useState({ title: "", author: "" });
  const { addBook } = useContext(BookContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.title && formData.author) {
      addBook(formData); // Call the addBook function from context
      setFormData({ title: "", author: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="container mt-4 mb-5 bg-secondary p-4 rounded">
      <h3 className="text-center">Add a New Book</h3>
      <form className="d-flex flex-column align-items-center">
        <div className="mb-3 col-12 col-lg-6">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Book Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-12 col-lg-6">
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter Author Name"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
