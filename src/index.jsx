import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { storeWithMiddleware } from './helpers/ReduxStoreHelper';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={
        storeWithMiddleware
    }>
      <App />
    </Provider>
  </React.StrictMode>
);