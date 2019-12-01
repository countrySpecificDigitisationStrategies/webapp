import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'app/store/reducers'
import { requestHandler } from 'app/store/middleware'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(requestHandler)))

export { store }
