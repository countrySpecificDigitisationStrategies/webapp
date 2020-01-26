import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import theme from 'theme'

import { appStyles } from './app.classes'
import { ToolBar, Navigation, Content } from './layout'

const App = () => {
  const classes = appStyles()

  // TODO: Fix this type error, probably related to HOCs
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const content = <Content />

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <div className="app-wrapper">
              <ToolBar />
              <Navigation />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                {content}
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
