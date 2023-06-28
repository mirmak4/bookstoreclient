import React from 'react';
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { storeWithMiddleware } from './helpers/ReduxStoreHelper';


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