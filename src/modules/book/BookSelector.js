export const getBooksSelector = (rootReducer) => rootReducer.bookReducer.booksResponse;
export const getBookPromiseSelector = (rootReducer) =>
  rootReducer.bookReducer.promise;