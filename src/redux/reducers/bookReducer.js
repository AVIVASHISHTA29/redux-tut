import { BOOK_ACTIONS } from "../actions/bookActions";

const initialState = {
    books: {
        data: [],
        loading: false,
        error: null,
    },
    suggestedBooks: {
        data: [],
        loading: false,
        error: null,
    },
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        // All Books
        case BOOK_ACTIONS.ALL_BOOKS_PENDING:
            return { ...state, books: { data: [], loading: true, error: null } };
        case BOOK_ACTIONS.ALL_BOOKS_SUCCESS:
            return {
                ...state,
                books: {
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case BOOK_ACTIONS.ALL_BOOKS_ERROR:
            return {
                ...state,
                books: { data: [], loading: false, error: action.payload },
            };
        // Suggested Books
        case BOOK_ACTIONS.SUGGESTED_BOOKS_PENDING:
            return {
                ...state,
                suggestedBooks: { data: [], loading: true, error: null },
            };
        case BOOK_ACTIONS.SUGGESTED_BOOKS_SUCCESS:
            return {
                ...state,
                suggestedBooks: {
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case BOOK_ACTIONS.SUGGESTED_BOOKS_ERROR:
            return {
                ...state,
                suggestedBooks: { data: [], loading: false, error: action.payload },
            };
        default:
            return state;
    }
};

export default bookReducer;
