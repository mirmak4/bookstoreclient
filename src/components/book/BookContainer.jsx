import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import getBooksAction from '../../modules/book/BookAction';
import BookFilter from './BookFilter';
import styles from './BookStyles.module.css';
import { getBooksSelector } from '../../modules/book/BookSelector';
import BookList from './BookList';

const BookContainer = (books) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch]);
    
    const booksResponse = useSelector(getBooksSelector);

    if (booksResponse && booksResponse.books) {
    
        return (
            <Box className={styles.bookContainer}>

                <BookFilter />

                <Box className={styles.bookList}>
                
                    <BookList books={booksResponse.books} />
                    
                </Box>
            </Box>
        );
    }

    return <BookList books={books.books ? books.books : []} />;
}

export default BookContainer;