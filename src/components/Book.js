import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuggestedBooks } from "../redux/actions/bookActions";
import { bookmark, unbookmark } from "../redux/actions/personalActions";

function Book({ book, isSuggested = false }) {
    const dispatch = useDispatch();
    const { bookmarks } = useSelector((state) => state.personal);

    return (
        <div key={book.id}>
            <img src={book.volumeInfo?.imageLinks?.thumbnail ?? ""} alt="img" />
            <h3>{book.volumeInfo.title}</h3>
            {bookmarks.includes(book) ? (
                <button onClick={() => dispatch(unbookmark(book.id))}>
                    Unbookmark Me
                </button>
            ) : (
                <button onClick={() => dispatch(bookmark(book))}>Bookmark Me</button>
            )}
            {!isSuggested && <button onClick={() => dispatch(getSuggestedBooks(book.volumeInfo.title, book.volumeInfo.categories[0]))}>Get Suggestions</button>}
        </div>
    );
}

export default Book;
