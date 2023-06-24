import { Box } from '@mui/material';
import Proptypes from 'prop-types';
import React from 'react';
import styles from './BookStyles.module.css';

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
        <Box className={styles.bookList}>
            {books.map((book) => {
                return (
                    <div key={book.id}>{book.id}</div>
                );
            })}
        </Box>
    );
}

BookList.propTypes = propTypes;
export default BookList;