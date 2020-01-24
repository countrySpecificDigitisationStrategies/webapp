export { Endpoint, post, get, patch } from 'app/service/api'
export { ApiError } from 'app/service/error'
export { setAuthToken, removeAuthToken } from 'app/service/authentication'

import { AuthToken as _AuthToken } from 'app/service/authentication'
export type AuthToken = _AuthToken
