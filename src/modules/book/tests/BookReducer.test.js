import bookReducer from "../BookReducer";
import { getBooksActionData, getBooksActionType, initialBookReducerState, booksReducerSample } 
    from "../../../helpers/test_helpers/TestDataProvider";

describe('bookReducer', () => {

    it('should return correct state', () => {
        // given
        const action = {
            type: getBooksActionType,
            payload: getBooksActionData
        };

        // when
        const newState = bookReducer(initialBookReducerState, action);

        // then
        expect(newState).toEqual(booksReducerSample);
    });
})