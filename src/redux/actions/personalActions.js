export const PERSONAL_ACTIONS = {
    BOOKMARK_BOOK: "BOOKMARK_BOOK",
    UNBOOKMARK_BOOK: "UNBOOKMARK_BOOK",
}


export const bookmark = (book) => ({ type: PERSONAL_ACTIONS.BOOKMARK_BOOK, payload: book })
export const unbookmark = (id) => ({ type: PERSONAL_ACTIONS.UNBOOKMARK_BOOK, payload: id })