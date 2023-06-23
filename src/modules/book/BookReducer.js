const INITIAL_BOOK_REDUCER_STATE = {
    books: []
    // bookResponse: {books: []}
}

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {

    switch(action.type) {
        case 'BOOKS_RESPONSE': {
            return {
                ...state,
                books: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

export default bookReducer;