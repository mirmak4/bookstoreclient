import getBooksService from "./BookService";
/*
export const getBooksAction = () => async (dispatch) => {

    try {
        const books = await getBooksService();
        dispatch({
            type: 'BOOKS_RESPONSE',
            payload: books.data
        });

        // return getBooksService().then(res => {
        //     dispatch({
        //         type: 'BOOKS_RESPONSE',
        //         payload: res.data
        //     });
        // });
    }
    catch(error) {
        console.log(error);
    }
};

// export default getBooksAction;
*/

export const getBooksAction = () => async (dispatch) => {
    try {
      // Loading Data
      dispatch({
        type: "BOOKLISTPENDING",
      });
  
      // Calling service
      const books = await getBooksService();
  
      // When getting data
      dispatch({
        type: "BOOKLIST",
        payload: books.data,
      });
  
      // When finishing to load all data
      dispatch({
        type: "BOOKLISTFULFILLED",
      });
    } catch (error) {
      console.log(error);
  
      // Data connection issue
      dispatch({
        type: "BOOKLISTERROR",
      });
    }
  };
  