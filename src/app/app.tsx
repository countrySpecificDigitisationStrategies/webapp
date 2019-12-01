import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from './store'

import theme from 'theme'

import { Home, Login, Register, Strategies, Strategy } from 'pages'
import APP_ROUTES from './routes'
import { appStyles } from './app.classes'
import { ToolBar, Navigation } from './layout'

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
              <Route exact path={APP_ROUTES.home} component={Home} />
              <Route exact path={APP_ROUTES.login} component={Login} />
              <Route exact path={APP_ROUTES.register} component={Register} />
              <Route exact path={APP_ROUTES.strategies} component={Strategies} />
              <Route exact path={APP_ROUTES.strategy} component={Strategy} />
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
