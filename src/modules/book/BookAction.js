import { getBooksService, getBooksByTitleService } from "./BookService";

export const getBooksAction = () => async (dispatch) => {
    try {
        // Loading data
        dispatch({
            type: 'BOOKLISTPENDING'
        });

        // Calling service
        const books = await getBooksService();
    
        // When getting data
        dispatch({
            type: "BOOKLIST",
            payload: books.data,
        });

        // Finished loading data
        dispatch({
            type: 'BOOKLISTFULFILLED'
        });
    } catch (error) {
        console.log(error);

        // When error occurred during loading data
        dispatch({
            type: 'BOOKLISTERROR'
        });
    }
};

export const getBooksByTitle = (title) => async (dispatch) => {
    try {
        console.log(`search title: ${title}`);

        dispatch({
            type: 'BOOKLISTPENDING'
        });

        const booksByTitle = await getBooksByTitleService(title);
        
        dispatch({
            type: 'BOOKSBYTITLE',
            payload: booksByTitle.data
        });

        dispatch({
            type: 'BOOKLISTFULFILLED'
        });
    }
    catch(error) {
        dispatch({
            type: 'BOOKLISTERROR'
        });
    }
};
  