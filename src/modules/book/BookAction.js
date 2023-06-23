import getBooksService from "./BookService";

const getBooksAction = () => async (dispatch) => {

    try {
        // const books = await getBooksService();
        // dispatch({
        //     type: 'BOOKS_RESPONSE',
        //     payload: books.data
        // });

        return getBooksService().then(res => {
            dispatch({
                type: 'BOOKS_RESPONSE',
                payload: res.data
            });
        });
    }
    catch(error) {
        console.log(error);
    }
};

export default getBooksAction;