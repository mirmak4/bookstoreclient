// GET BOOKS ACTION START
const getBooksActionData = [
    {
        id: 1,
        title: 'test title',
        description: 'test description',
        author: 'test author',
        releaseYear: 1951
    }
];

const getBooksActionType = 'BOOKS_RESPONSE';
// GET BOOKS ACTION END

// BOOK REDUCER START
const initialBookReducerState = {
    books: []
};

const getBooksReducerData = {
    books: getBooksActionData
};
// BOOK REDUCER END

// BOOK CONTAINER START
const bookContainerStateWithData = {
    initialState: {
        bookReducer: {
            ...getBooksReducerData
        }
    }
};

const bookReducerStateWithData = {
    bookReducer: {
        ...getBooksReducerData
    }
};
// BOOK CONTAINER END

export {
    getBooksActionData,
    initialBookReducerState,
    getBooksReducerData,
    getBooksActionType,
    bookContainerStateWithData,
    bookReducerStateWithData
};