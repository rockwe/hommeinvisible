import React from 'react'
import Routes from './config/routes'

import { store } from './config/store'
import { Provider } from 'react-redux'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App
