import { Box } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const propTypes = {

    children: PropTypes.node.isRequired
};

const Layout = ( {children} ) => {

    return (
        <Box>
            <Box>
                <Header />
            </Box>

            <Box sx={{mt: 8, ml: 5}}>
                {children}
            </Box>
        </Box>
    );
};

Layout.propTypes = propTypes;

export default Layout;