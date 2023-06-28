import React, { useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../../modules/book/BookAction';
import BookFilter from './BookFilter';
import styles from './BookStyles.module.css';
import { getBooksSelector, getBookPromiseSelector } from '../../modules/book/BookSelector';
import BookList from './BookList';

const BookContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch]);
    
    const booksResponse = useSelector(getBooksSelector);
    const bookPromise = useSelector(getBookPromiseSelector);

    console.log("Book Container useSelector books: ", booksResponse);
    
    return (
        <Box className={styles.bookContainer}>
          <BookFilter />
          <Box className={styles.bookList}>
            {
              // Le's display Loader
              bookPromise.isPending && (
                <Box ml={5}>
                  <Skeleton
                    data-testid="book-loader"
                    variant="rect"
                    animation="pulse"
                    width="80%"
                    height={200}
                  />
                </Box>
              )
            }
            {
              // Display error message
              bookPromise.isErrorOccured && (
                <div data-testid="book-error-messsage"> Error message ... </div>
              )
            }
            {
              // Display Data
              bookPromise.isFulfilled && <BookList booksResponse={booksResponse} />
            }
          </Box>
        </Box>
      );
}

export default BookContainer;