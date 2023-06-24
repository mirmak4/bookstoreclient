import axios from 'axios';
import getBooksAction from '../BookAction';
import { getBooksActionData, getBooksActionType } from '../../../helpers/test_helpers/TestDataProvider';
import { mockedStore } from '../../../helpers/test_helpers/TestSetupProvider';

jest.mock('axios');

describe('BookActions test', () => {

    it('should successfully dispatch get books action', async () => {
        const store = mockedStore({});
        axios.get.mockImplementation(() => Promise.resolve({
            data: getBooksActionData
        }));

        await store.dispatch(getBooksAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual({
            type: getBooksActionType,
            payload: getBooksActionData
        });
    });
});