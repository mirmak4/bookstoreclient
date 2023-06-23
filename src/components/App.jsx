import React from 'react';
import axios from 'axios';
import baseUrl from '../config';
import Layout from './layout/layout';
import BookContainer from './book/BookContainer';

const App = () => {

    axios(`${baseUrl}/bookstore/api/v1/books`).then(books => {
        console.log(books);
    });
    return (
        <Layout>
            <BookContainer />
        </Layout>
    );
}

export default App;