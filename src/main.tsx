import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { TodoApp } from './TodoApp'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('my-react-app')
);



