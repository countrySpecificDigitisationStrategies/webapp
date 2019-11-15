import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider } from '@material-ui/core'

import { Home, Login, SignUp } from './pages'
import rootReducer from './store/reducers'
import theme from './theme'
import './styles/index.styl'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, reduxDevTools)
const provider = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(provider, document.getElementById('app'))
