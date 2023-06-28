import React from 'react';
import { render } from '@testing-library/react';
import BookList from '../BookList';
import BookListItem from '../BookListItem';
import { bookListResponse } from '../../../helpers/test_helpers/TestDataProvider';

jest.mock('../BookListItem');

describe('BookList', () => {

    beforeAll(() => {
        BookListItem.mockImplementation(() => <div>Book List Item</div>);
    });

    it('should render book list without error', () => {
        // given
        const booksResponse = bookListResponse;
        const books = bookListResponse.books;

        // when
        render(<BookList booksResponse={booksResponse}/>);

        // then
        expect(BookListItem).toHaveBeenCalledTimes(books.length);
        books.forEach(book => {
            expect(BookListItem).toHaveBeenCalledWith({ book }, {});
        });
    });
});