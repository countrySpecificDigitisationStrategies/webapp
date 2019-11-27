import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { store } from 'store'

import theme from 'theme'
import 'styles/app.styl'

import { Home, Login, Register, Strategies, Strategy } from 'pages'
import { Navigation, ToolBar } from './features/skeleton'
import APP_ROUTES from './shared/routes'
import { appStyles } from './styles/app.classes'

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
