import React from 'react';
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../src/components/user/LoginStyles.module.css';
import { storeWithMiddleware } from './helpers/ReduxStoreHelper';
import axios from 'axios';
import { tokenKey } from './helpers/Consts';

axios.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem(tokenKey);
        if (token != null) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={
        storeWithMiddleware
    }>
      <App />
    </Provider>
);

/*
ReactDOM.render(
  <Provider
    store={storeWithMiddleware}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
*/