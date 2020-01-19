export type AuthToken = string
const AUTH_TOKEN_STORAGE_KEY = 'token'

export const setAuthToken = (token: AuthToken): void => {
  window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
}

export const removeAuthToken = (): void => {
  window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
}

export const getAuthToken = (): AuthToken | null => window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)

export const isAuthTokenValid = (): boolean => getAuthToken() !== null
