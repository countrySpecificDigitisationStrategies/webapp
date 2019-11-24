import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from 'store'

import { MuiThemeProvider } from '@material-ui/core'
import theme from 'theme'
import 'styles/app.styl'

import { Home, Login, Register, Strategies, Strategy } from 'pages'
import { NavBar } from 'shared/components'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/strategies" exact component={Strategies} />
          <Route path="/strategies/:id" component={Strategy} />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

export default App
