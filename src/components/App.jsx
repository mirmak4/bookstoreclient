import React from 'react';
import Layout from './layout/layout';
import BookContainer from './book/BookContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './user/Login';
import { SnackbarProvider } from 'notistack';
import ApiAuth from './auth/ApiAuth';

// Routes is enabling just one Route at a time
const App = () => {

    return (
        <SnackbarProvider maxSnack={3}>
            <Router>
                <Layout>
                    <Routes>
                    
                        <Route path='/login' element={ <Login /> } />

                        {/* <Route path='/login' element={<ApiAuth />}>
                            <Route path='/' element={ <BookContainer /> } />
                        </Route> */}
                        
                        <Route path='/' element={<ApiAuth />}>

                            <Route path='/' element={<BookContainer />} />
                            
                        </Route>

                    </Routes>
                </Layout>
            </Router>
        </SnackbarProvider>
    );
}

export default App;