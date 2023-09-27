// import { useContext } from "react";
// import BooksContext from "../context/books";
import useBooksContext from "./hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className="book-list">
      {/* {count}
      <button onClick={incrementCount}>Increment</button> */}
      {renderedBooks}
    </div>
  );
}

export default BookList;
