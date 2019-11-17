import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers'

import { MuiThemeProvider } from '@material-ui/core'

import theme from './theme'
import './styles/index.styl'

import { NavBar } from './components'
import { Home, Login, RegistrationForm } from './pages'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const provider = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={RegistrationForm} />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(provider, document.getElementById('app'))
