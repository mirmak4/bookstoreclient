import React from 'react';
import axios from 'axios';
import baseUrl from '../config';
import Layout from './layout/layout';

const App = () => {

    axios(`${baseUrl}/bookstore/api/v1/books`).then(books => {
        console.log(books);
    });
    return (
    
        <Layout>
            <div>My first component</div>
        </Layout>
    );
}

export default App;