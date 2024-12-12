import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import { searchBooks } from "./redux/actions/bookActions";

function App() {
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchFnc = () => {
    dispatch(searchBooks(search));
  };

  return (
    <div className="App">
      <button onClick={() => navigate("/saved-books")}>Go To Saved Books</button>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchFnc}>Search</button>

      {books.loading && <p>Loading...</p>}
      {books.error && <p>Error: {books.error}</p>}
      {books?.data?.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
}

export default App;
