import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './src/containers/Counter'

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
