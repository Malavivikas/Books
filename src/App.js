import { useEffect } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
// import BooksContext from "./context/books";
import useBooksContext from "./components/hooks/use-books-context";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
