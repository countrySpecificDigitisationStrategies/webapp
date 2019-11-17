import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { saveAuthToken } from './middleware'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saveAuthToken, thunk)))

export default store
