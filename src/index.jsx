import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import App from './components/App';
import reducers from './modules';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const createSoteWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={
        createSoteWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ 
        && window.__REDUX_DEVTOOLS_EXTENSION__())
    }>
      <App />
    </Provider>
  </React.StrictMode>
);