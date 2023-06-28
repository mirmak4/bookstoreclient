import bookReducer from "../BookReducer";
import { getBooksActionData, getBooksActionType, initialBookReducerState, getBooksReducerData } 
    from "../../../helpers/test_helpers/TestDataProvider";

describe('bookReducer', () => {

    it('should return correct state', () => {
        const action = {
            type: getBooksActionType,
            payload: getBooksActionData
        };

        const newState = bookReducer(initialBookReducerState, action);
        expect(newState).toEqual(getBooksReducerData);
    });
})