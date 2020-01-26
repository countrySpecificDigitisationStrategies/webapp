export { Endpoint, post, get, put, patch } from './api'
export { ApiError } from './error'
export { setAuthToken, removeAuthToken } from './authentication'

import { AuthToken as _AuthToken } from './authentication'
export type AuthToken = _AuthToken
