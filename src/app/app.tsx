import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import theme from 'theme'

import { appStyles } from './app.classes'
import { ToolBar, Navigation, Content } from './layout'

const App = () => {
  const classes = appStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <div className="app-wrapper">
            <ToolBar />
            <Navigation />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Content />
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
