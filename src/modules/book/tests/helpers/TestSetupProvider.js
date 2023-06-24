import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { createSoteWithMiddleware } from '../../../../helpers/ReduxStoreHelper';
import React from 'react';
import { Provider } from 'react-redux';
import reducers from '../../../../modules';
import { render } from '@testing-library/react';

const middleware = [reduxThunk];
const mockedStore = configureStore(middleware);

const renderWithRedux = (
    ui, 
    {
        initialState,
        store = createSoteWithMiddleware(reducers, initialState)
    }) => ({
        ...render(
            <Provider store={store}>{ui}</Provider>
        )
    });

// export default mockedStore;
export {
    mockedStore,
    renderWithRedux
}