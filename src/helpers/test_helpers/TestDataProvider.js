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

const getBooksActionType = 'BOOKLIST';
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

// BOOK LIST START
const bookListBooks = [
    {
        id: 1,
        title: 'test title 1',
        description: 'test description 1',
        author: 'test author 1',
        releaseYear: 1951
    },
    {
        id: 2,
        title: 'test title 2',
        description: 'test description 2',
        author: 'test author 2',
        releaseYear: 1944
    }
];

const bookListResponse = {
    books: bookListBooks
};

// BOOK LIST ITEM START
const bookItem = {
    id: 1,
    title: 'test title 1',
    description: 'test description 1',
    author: 'test author 1',
    releaseYear: 1981
};
// BOOK LIST ITEM END

// BOOK LIST END

export {
    getBooksActionData,
    initialBookReducerState,
    getBooksReducerData,
    getBooksActionType,
    bookContainerStateWithData,
    bookReducerStateWithData,
    bookListResponse,
    bookItem
};