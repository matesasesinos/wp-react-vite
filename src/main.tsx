import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Reducers/reducers'

import App from "./App";

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('my-react-app') as HTMLElement).render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)

