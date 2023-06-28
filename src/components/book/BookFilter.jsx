import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './BookStyles.module.css';
import { getBooksByTitle } from '../../modules/book/BookAction';

const BookFilter = () => {

    const [ searchText, setSearchText ] = useState('');
    const dispatch = useDispatch();

    const handleSearchCahnge = (event) => {
        setSearchText(event.target.value)
    };

    const handleSearchClick = () => {
        dispatch(getBooksByTitle(searchText));
    };

    return (
        <Box className={styles.bookFilter}>
            <Paper className={styles.bookFilterPaper}>
                <Typography>Search Books Filters</Typography>
                <Box paddingTop={3} marginBottom={3}>
                    <TextField 
                        placeholder='Enter book title'
                        id='book-search' 
                        label='Enter book title'
                        variant='outlined'
                        inputProps={{ "data-testid": "book-title-input" }}
                        value={searchText}
                        onChange={ handleSearchCahnge }
                    />
                </Box>
                <Button 
                    onClick={ handleSearchClick }
                    data-testid='book-search-button' 
                    variant='contained' 
                    color='primary'
                >
                    Search Books
                </Button>
            </Paper>
        </Box>
    );
};

export default BookFilter;