import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { requestHandler } from './middleware'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(requestHandler)))

export default store
