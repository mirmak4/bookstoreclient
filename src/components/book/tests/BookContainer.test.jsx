import React from 'react';
import { bookContainerStateWithData } from '../../../helpers/test_helpers/TestDataProvider';
import { renderWithRedux } from '../../../helpers/test_helpers/TestSetupProvider';
import BookContainer from '../BookContainer';

describe('BookContainer', () => {

    it('should render without error', () => {

        const { getByText} = renderWithRedux(
            <BookContainer />,
            bookContainerStateWithData
        );
    
        const expectedText = 'Here we will display all books.';
        expect(getByText(expectedText)).toBeInTheDocument();
    });
});