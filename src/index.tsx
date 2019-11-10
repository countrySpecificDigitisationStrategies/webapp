import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';

const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, reduxDevTools);
const provider = (
    <Provider store={store}>
        <App />
    </Provider>
);

const routing = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('app'));
