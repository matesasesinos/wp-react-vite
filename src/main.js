import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Reducers/reducers'


const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ,

  document.getElementById("my-react-app")
);
