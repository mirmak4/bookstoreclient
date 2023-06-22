import { Box, Paper } from '@mui/material';
import React from 'react';
import styles from './BookStyles.module.css';

const BookFiler = () => {

    return (
        <Box className={styles.bookFilter}>
            <Paper className={styles.bookFilterPaper}>
                book filter
            </Paper>
        </Box>
    );
};

export default BookFiler;