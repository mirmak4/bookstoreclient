import { Box } from '@mui/material';
import React from 'react';
import BookFiler from './BookFilter';
import styles from './BookStyles.module.css';

const BookContainer = () => {

    return (
        <Box className={styles.bookContainer}>
            <BookFiler />

            <Box className={styles.bookList}>
                Here we will display all books.
            </Box>
        </Box>
    );
}

export default BookContainer;