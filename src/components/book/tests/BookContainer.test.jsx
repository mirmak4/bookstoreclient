import React from 'react';
import { getBooksActionData } from '../../../helpers/test_helpers/TestDataProvider';
import { renderWithRedux } from '../../../helpers/test_helpers/TestSetupProvider';
import BookList from '../BookList';
import BookContainer from '../BookContainer';
import { getBooksAction } from '../../../modules/book/BookAction';

jest.mock("../BookList", () => jest.fn());

jest.mock("../../../modules/book/BookAction", () => ({
    getBooksAction: jest.fn(),
  }));

describe('BookContainer', () => {

    beforeAll(() => {
        // Mocking component
        BookList.mockImplementation(() => <div>mock booklist comp</div>);
    });

    it('should render without error', () => {
        // given
        const books = getBooksActionData;
        
        // Mocking actions
        getBooksAction.mockImplementation(() => (dispatch) => {
            dispatch({
                type: "BOOKLIST",
                payload: books,
            });
            dispatch({ type: "BOOKLISTFULFILLED" });
        });

        // when
        renderWithRedux(<BookContainer  />, {});
    
        // then
        expect(BookList).toHaveBeenLastCalledWith({ booksResponse: books }, {});
        expect(BookList).toBeDefined();
    });

    it('should show loader when isPending is true', () => {
        // given
        getBooksAction.mockImplementation(() => (dispatch) => {
            dispatch({
                type: "BOOKLISTPENDING",
            });
        });

        // when
        const { getByTestId } = renderWithRedux(<BookContainer />, {});

        // then
        expect(getByTestId("book-loader")).toBeInTheDocument();
    });

    it('should show error when isErrorOccured is true', () => {
        // given
        getBooksAction.mockImplementation(() => (dispatch) => {
            dispatch({
                type: "BOOKLISTERROR",
            });
        });

        // when
        const { getByTestId } = renderWithRedux(<BookContainer />, {});

        // then
        expect(getByTestId("book-error-message")).toBeInTheDocument();
    });
});
