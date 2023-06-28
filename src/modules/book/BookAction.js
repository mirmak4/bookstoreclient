import getBooksService from "./BookService";

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
  