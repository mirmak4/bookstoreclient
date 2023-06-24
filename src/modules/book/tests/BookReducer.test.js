import bookReducer from "../BookReducer";
import testData from "./helpers/TestDataProvider";

describe('bookReducer', () => {

    it('should return correct state', () => {
        const action = {
            type: testData.getBooksActionType,
            payload: testData.getBooksActionData
        };

        const newState = bookReducer(testData.initialBookReducerState, action);
        expect(newState).toEqual(testData.getBooksReducerData);
    });
})