import { useState, createContext, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  console.log("");
  const fetchBooks = useCallback(async () => {
    const response = await axios.get(
      "https://malavivikas.github.io/books/db.json/books"
    );

    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(
      `https://malavivikas.github.io/books/db.json/books/${id}`,
      {
        title: newTitle,
      }
    );
    // console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(
      `https://malavivikas.github.io/books/db.json/books/${id}`
    );

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post(
      "https://malavivikas.github.io/books/db.json/books",
      {
        title,
      }
    );

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
