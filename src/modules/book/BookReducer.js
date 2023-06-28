export const INITIAL_BOOK_REDUCER_STATE = {
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOccured: false
    },
    booksResponse: {
        books: [],
    }
};

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {

    switch(action.type) {
        case 'BOOKLIST': {
            return {
                ...state,
                booksResponse: action.payload
            }
        }

        case 'BOOKLISTPENDING': {
            return {
                ...state,
                promise: {
                    isPending: true,
                    isFulfilled: false,
                    isErrorOccured: false
                }
            }
        }

        case 'BOOKLISTERROR': {
            return {
                ...state,
                promise: {
                    isPending: false,
                    isFulfilled: false,
                    isErrorOccured: true
                }
            }
        }

        case 'BOOKLISTFULFILLED': {
            return {
                ...state,
                promise: {
                    isPending: false,
                    isFulfilled: true,
                    isErrorOccured: false
                }
            }
        }

        default: {
            return state;
        }
    }
};

export default bookReducer;