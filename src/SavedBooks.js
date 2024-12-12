import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Book from "./components/Book";

function SavedBooks() {
    const navigate = useNavigate();
    const { bookmarks } = useSelector((state) => state.personal);
    const { suggestedBooks } = useSelector((state) => state.book);
    return (
        <div>
            <button onClick={() => navigate("/")}>Go Back</button>
            <h1>Saved Books</h1>
            {bookmarks.map((book) => (
                <Book book={book} />
            ))}
            <h1>Suggestions</h1>
            {suggestedBooks.loading ? (
                <h1>Loading...</h1>
            ) : suggestedBooks.error ? (
                <h1>Error</h1>
            ) : (
                suggestedBooks.data?.map((book) => <Book book={book} isSuggested={true} />)
            )}
        </div>
    );
}

export default SavedBooks;
