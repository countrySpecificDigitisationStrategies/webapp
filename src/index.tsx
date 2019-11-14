import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider } from '@material-ui/core'
import './styles/index.css'

import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import { SignUp } from './pages'
import rootReducer from './store/reducers'
import theme from './theme'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, reduxDevTools)
const provider = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <NavBar></NavBar>

      <BrowserRouter>
        <Route exact path="/" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(provider, document.getElementById('app'))
