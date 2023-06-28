import bookReducer from "../BookReducer";
import { initialBookReducerState, booksReducerSample, booksByTitleActionNewState, getBooksActionSample, booksByTitleActionReducerSample } 
    from "../../../helpers/test_helpers/TestDataProvider";

describe('bookReducer', () => {

    it('should return correct state', () => {
        // given
        const action = getBooksActionSample;

        // when
        const newState = bookReducer(initialBookReducerState, action);

        // then
        expect(newState).toEqual(booksReducerSample);
    });

    it('should return right new state for books by title action', () => {
        // given
        const action = booksByTitleActionReducerSample;

        // when
        const newState = bookReducer(initialBookReducerState, action);

        // then
        expect(newState).toEqual(booksByTitleActionNewState);
    });
})