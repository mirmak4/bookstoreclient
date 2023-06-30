import React from 'react';
import Layout from './layout/layout';
import BookContainer from './book/BookContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './user/Login';

// Routes is enabling just one Route at a time
const App = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/login' element={ <Login /> } />
                    
                    <Route exact path='/' element={ <BookContainer /> } />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;