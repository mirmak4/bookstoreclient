import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import getBooksAction from '../../modules/book/BookAction';
import BookFiler from './BookFilter';
import styles from './BookStyles.module.css';
import { getBooksSelector } from '../../modules/book/BookSelector';

const BookContainer = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch]);
    const books = useSelector(getBooksSelector);
    console.log(books);
    
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