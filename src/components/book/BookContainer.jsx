import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import getBooksAction from '../../modules/book/BookAction';
import BookFiler from './BookFilter';
import styles from './BookStyles.module.css';

const BookContainer = () => {

    const dispatch = useDispatch();
    dispatch(getBooksAction());
    
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