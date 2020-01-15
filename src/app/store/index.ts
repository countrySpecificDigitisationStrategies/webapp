import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'app/store/reducers'
import middleware from 'app/store/middleware'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export { store }
