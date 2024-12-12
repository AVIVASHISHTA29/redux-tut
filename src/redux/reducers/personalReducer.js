import { PERSONAL_ACTIONS } from "../actions/personalActions";

const initialState = {
    bookmarks: [],
}

const personalReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONAL_ACTIONS.BOOKMARK_BOOK: {
            // state.bookmarks.push(action.payload);
            return { ...state, bookmarks: [...state.bookmarks, action.payload] }
        }
        case PERSONAL_ACTIONS.UNBOOKMARK_BOOK: {
            const newBookmarks = state.bookmarks.filter((book) => book.id !== action.payload)
            return { ...state, bookmarks: newBookmarks }
        }
        default:
            return state;
    }
}

export default personalReducer;