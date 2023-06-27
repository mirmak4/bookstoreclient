import React from 'react';
import { bookContainerStateWithData } from '../../../helpers/test_helpers/TestDataProvider';
import { renderWithRedux } from '../../../helpers/test_helpers/TestSetupProvider';
import BookList from '../BookList';
import BookContainer from '../BookContainer';

jest.mock('../BookList');

describe('BookContainer', () => {

    beforeAll(() => {
        BookList.mockImplementation(() => {
            return (
                <div>Mocked book list component</div>
            );
        });
    });

    it('should render without error', () => {

        const books = bookContainerStateWithData.initialState.bookReducer.books;

        renderWithRedux(
            <BookContainer books={books} />,
            bookContainerStateWithData
        );
    
        expect(BookList).toHaveBeenLastCalledWith({ books: books }, {});
        expect(BookList).toBeDefined();
    });
});
