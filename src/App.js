import React, { useEffect, useState } from 'react'
import Routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './config/store'

import { ThemeProvider } from 'styled-components'
import { themeDark } from './config/theme'
import { store } from './config/store'
import { Provider } from 'react-redux'
import './App.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themeDark)
  useEffect(() => {
    store.subscribe(() => {
      setCurrentTheme(store.getState().theme.currentTheme)
    })
  })
  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <Routes></Routes>
      </ThemeProvider>
    </Provider>
  )
}

export default App
