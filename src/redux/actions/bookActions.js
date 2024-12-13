import axios from "axios";

export const BOOK_ACTIONS = {
    ALL_BOOKS_PENDING: "ALL_BOOKS_PENDING",
    ALL_BOOKS_SUCCESS: "ALL_BOOKS_SUCCESS",
    ALL_BOOKS_ERROR: "ALL_BOOKS_ERROR",

    SUGGESTED_BOOKS_PENDING: "SUGGESTED_BOOKS_PENDING",
    SUGGESTED_BOOKS_SUCCESS: "SUGGESTED_BOOKS_SUCCESS",
    SUGGESTED_BOOKS_ERROR: "SUGGESTED_BOOKS_ERROR",
}

export const searchBooks = (query) => {
    return async (dispatch) => {
        dispatch({ type: BOOK_ACTIONS.ALL_BOOKS_PENDING });
        try {
            const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
            dispatch({ type: BOOK_ACTIONS.ALL_BOOKS_SUCCESS, payload: data })
        } catch (e) {
            console.log("error>>>", e);
            dispatch({ type: BOOK_ACTIONS.ALL_BOOKS_ERROR, payload: e.message });
        }
    }
}

export const getSuggestedBooks = (name, category) => {
    return async (dispatch) => {
        dispatch({ type: BOOK_ACTIONS.SUGGESTED_BOOKS_PENDING });
        try {
            const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name + " " + category}`);
            dispatch({ type: BOOK_ACTIONS.SUGGESTED_BOOKS_SUCCESS, payload: data.items })
        } catch (e) {
            console.log("error>>>", e);
            dispatch({ type: BOOK_ACTIONS.SUGGESTED_BOOKS_ERROR, payload: e.message });
        }
    }
}