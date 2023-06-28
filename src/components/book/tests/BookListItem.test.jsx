import React from 'react';
import BookListItem from '../BookListItem';
import { render } from '@testing-library/react';
import { bookItem } from '../../../helpers/test_helpers/TestDataProvider';

describe('BookListItem', () => {

    it('should render book list item without error', () => {
        // given
        const book = bookItem;
        const bookTitle = book.title;
        const bookDescription = book.description;
        const bookAuthor = book.author;
        const bookYear = book.releaseYear;

        // when
        const { getByText, getAllByText } = render(<BookListItem book={bookItem} />);

        // then
        expect(getAllByText(bookTitle)[0]).toBeInTheDocument();
        expect(getByText(bookDescription)).toBeInTheDocument();
        expect(getByText(bookAuthor)).toBeInTheDocument();
        expect(getByText(bookYear)).toBeInTheDocument();
    });
});