import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import { RocketBulletPoint, SearchButton, StarBulletPoint } from "./components/Button";
import { Card, Card2 } from "./components/Render";
import { searchBooks } from "./redux/actions/bookActions";
import { setSearch } from "./redux/actions/personalActions";

function App() {
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.personal);

  const searchFnc = () => {
    dispatch(searchBooks(search));
  };

  return (
    <div className="App">
      <button onClick={() => navigate("/saved-books")}>
        Go To Saved Books
      </button>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      {/* <Button
        title="Search"
        onClick={searchFnc}
        style={{ backgroundColor: "red", color: "white" }}
      /> */}

      <SearchButton
        title="Search"
        onClick={searchFnc}
        style={{ backgroundColor: "red", color: "white" }}
      />

      <StarBulletPoint title="Kalyan is a good student" />
      <StarBulletPoint title="Aditya is a good student" />
      <StarBulletPoint title="Adarsh is a good student" />

      <RocketBulletPoint title="Hi" />

      {books.loading && <p>Loading...</p>}
      {books.error && <p>Error: {books.error}</p>}
      <h1>Total Items: {books.totalItems}</h1>
      {books?.data?.map((book) => (
        <Book book={book} />
      ))}

      <Card heading="Heading" desc="Desc" date="2024-01-01" />
      <Card2 heading="Heading 2" desc="Desc 2" date="2024-01-01" />
    </div>
  );
}

export default App;
