import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'app/store/reducers'
import middleware from 'app/store/middleware'

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 5 })
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export { store }
