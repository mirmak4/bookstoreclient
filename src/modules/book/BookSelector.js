export const getBooksSelector = (rootReducer) => rootReducer.bookReducer.booksResponse;

export const getBooksPromiseSelector = (rootReducer) => rootReducer.bookReducer.promise;