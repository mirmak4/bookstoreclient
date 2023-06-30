import React from 'react';
import { renderWithRedux } from '../../../helpers/test_helpers/TestSetupProvider';
import BookFilter from '../BookFilter';
import { fireEvent } from '@testing-library/react';
import { getBooksByTitle } from '../../../modules/book/BookAction';

// jest.mock('../../../modules/book/BookAction');

jest.mock("../../../modules/book/BookAction", () => ({
    getBooksByTitle: jest.fn(),
}));

describe('BookFilter', () => {

    it('should fire getBooksByTitle action on search button click', () => {
        // given
        const bookTitle = 'test title';
        getBooksByTitle.mockImplementation(() => (dispatch) => {});
        
        // when
        const { getByTestId } = renderWithRedux(<BookFilter />, {});
        const textField = getByTestId('book-title-input');
        
        fireEvent.change(
            textField, 
            {
                target: {
                    value: bookTitle
                }
            }
        );

        const searchButton = getByTestId('book-search-button');

        fireEvent.click(searchButton);

        // then
        expect(getBooksByTitle).toHaveBeenCalledWith(bookTitle);
    });
});