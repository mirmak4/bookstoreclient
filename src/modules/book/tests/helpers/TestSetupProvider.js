import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';

const middleware = [reduxThunk];
const mockedStore = configureStore(middleware);

export default mockedStore;