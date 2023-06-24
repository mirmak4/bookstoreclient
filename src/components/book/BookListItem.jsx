import React from 'react';
import Proptypes from 'prop-types';
import styles from './BookStyles.module.css';
import { Avatar, Box, Paper, Typography } from '@mui/material';

const propTypes = {

    book: Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        author: Proptypes.string.isRequired,
        releaseYear: Proptypes.number.isRequired,
    }).isRequired,
};

const BookListItem = ({ book }) => {

    return (

        <Box mb={2}>
            <Paper elevation={2} className={styles.bookListItemPaper} >
                <Avatar className={styles.bookImage} variant='square'>{book.title}</Avatar>
                <Box ml={1}>
                    <Typography variant='h5'>{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.author}</Typography>
                    <Typography>{book.releaseYear}</Typography>
                </Box>
            </Paper>
        </Box>
    );
};

BookListItem.propTypes = propTypes;
export default BookListItem;