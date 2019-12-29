import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'app/store/reducers'
import middleware from 'app/store/middleware'
import subscribeStateListener from 'app/store/subscriptions'
import loadPersistedStates from 'app/store/persistedStates'

const store = createStore(rootReducer, loadPersistedStates(), composeWithDevTools(applyMiddleware(...middleware)))

subscribeStateListener()

export { store }
