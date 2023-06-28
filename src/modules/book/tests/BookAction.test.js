import axios from 'axios';
import { getBooksAction } from '../BookAction';
import { getBooksActionData, getBooksActionSample } from '../../../helpers/test_helpers/TestDataProvider';
import { mockedStore } from '../../../helpers/test_helpers/TestSetupProvider';

jest.mock('axios');

describe('BookActions test', () => {

    it('should successfully dispatch get books action', async () => {
        // given
        const store = mockedStore({});
        axios.get.mockImplementation(() => Promise.resolve({
            data: getBooksActionData
        }));

        // when
        await store.dispatch(getBooksAction());

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual(getBooksActionSample);
    });
});