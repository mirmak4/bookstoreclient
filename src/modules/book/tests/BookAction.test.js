import axios from 'axios';
import { getBooksAction, getBooksByTitle } from '../BookAction';
import { getBooksActionData, getBooksActionSample, getBooksByTitleActionSample, getBooksActionError } 
    from '../../../helpers/test_helpers/TestDataProvider';
import { mockedStore } from '../../../helpers/test_helpers/TestSetupProvider';

jest.mock('axios');

describe('BookActions test', () => {

    let store = mockedStore({});
    const bookTitle = 'Test title';

    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({
            data: getBooksActionData
        }));

        store = mockedStore({});
    });

    it('should successfully dispatch get books action', async () => {
        // when
        await store.dispatch(getBooksAction());

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual(getBooksActionSample);
    });

    it('should dispatch error get books action', async () => {
        // when
        axios.get.mockImplementation(() => {
            throw new Error();
        });
        await store.dispatch(getBooksAction());

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual(getBooksActionError);
    });

    it('should dispatch success get books by title action', async () => {
        // when
        await store.dispatch(getBooksByTitle(bookTitle));

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual(getBooksByTitleActionSample);
    });

    it('should dispatch books by title action', async () => {
        // when
        await store.dispatch(getBooksByTitle(bookTitle));

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual(getBooksByTitleActionSample);
    });

    it('should dispatch error get books by title action', async () => {
        // when
        axios.get.mockImplementation(() => {
            throw new Error();
        });
        await store.dispatch(getBooksByTitle(bookTitle));

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual(getBooksActionError);
    });
});