export const INITIAL_BOOK_REDUCER_STATE = {
    books: [],
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOccured: false,
      },
    // bookResponse: {books: []}
};

const bookReducer = (state = INITIAL_BOOK_REDUCER_STATE, action) => {

    switch(action.type) {
        /*
        case 'BOOKLIST': {
            return {
                ...state,
                books: action.payload
            }
        }

        default: {
            return state;
        }
        */

        case "BOOKLIST": {
            /*
             * We're returning a brand new object rather than trying to change state.
             * We then use the spread operator to create a copy of the state.
             * Then we override the books property with the new value from action.payload.
             */
            return {
              ...state,
              books: action.payload,
            };
          }
      
          case "BOOKSBYTITLE": {
            /*
             * We're returning a brand new object rather than trying to change state.
             * We then use the spread operator to create a copy of the state.
             * Then we override the books property with the new value from action.payload.
             */
            return {
              ...state,
              books: action.payload,
            };
          }
      
          case "BOOKLISTPENDING": {
            return {
              ...state,
              promise: {
                isPending: true,
                isFulfilled: false,
                isErrorOccured: false,
              },
            };
          }
      
          case "BOOKLISTERROR": {
            return {
              ...state,
              promise: {
                isPending: false,
                isFulfilled: false,
                isErrorOccured: true,
              },
            };
          }
      
          case "BOOKLISTFULFILLED": {
            return {
              ...state,
              promise: {
                isPending: false,
                isFulfilled: true,
                isErrorOccured: false,
              },
            };
          }
      
          default: {
            return state;
          }
    }
};

export default bookReducer;