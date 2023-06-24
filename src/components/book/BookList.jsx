import { Box } from '@mui/material';
import Proptypes from 'prop-types';
import React from 'react';
import styles from './BookStyles.module.css';
import BookListItem from './BookListItem';

const propTypes = {

    books: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            title: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            author: Proptypes.string.isRequired,
            releaseYear: Proptypes.number.isRequired,
        })
    ).isRequired,
};

const BookList = ({books}) => {

    return (
        <Box className={styles.bookList} ml={5}>
            {books.map((book) => {
                return (
                    <BookListItem book={book} key={book.id} />
                );
            })}
        </Box>
    );
}

BookList.propTypes = propTypes;
export default BookList;