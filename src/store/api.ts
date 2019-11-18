import { AuthToken } from './types'

const baseUrl = 'http://206.189.251.20:8000/api/'
const version = 'v1/'

const AUTH_TOKEN_STORAGE_KEY = 'token'

export enum Endpoint {
  register = 'auth/register',
  login = 'auth/login',
  logout = 'auth/logout',
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export class ApiError extends Error {
  constructor({ code, name, detail }) {
    super(detail)
    this.detail = detail //Human readable error message
    this.name = name //HTTP Error Response
    this.code = code //HTTP Error Code
  }
}

export const get = async (endpoint: Endpoint, id?: number): Promise => {
  return fetchFromApi(buildUrl(endpoint, id), HttpMethod.GET)
}

export const post = async (endpoint: Endpoint, data: object): Promise => {
  return fetchFromApi(buildUrl(endpoint), HttpMethod.POST, data)
}

const buildUrl = (endpoint: string, id?: number) => {
  const url = baseUrl + version + endpoint
  if (id) {
    return url + '/' + id
  }
  return url
}

const fetchFromApi = async (url, method: HttpMethod, data?: object): Promise => {
  const response = await fetch(url, getFetchOptions(method, data))
  let content
  try {
    content = await response.json()
  } catch (e) {
    content = null
  }

  if (!response.ok) {
    const code = response.status
    const name = response.statusText
    const detail = content ? content.detail : `${code}: ${name}`
    throw new ApiError({ code, name, detail })
  }

  return content
}

const getFetchOptions = (method: HttpMethod, data?: object): object => {
  let fetchOptions = {
    method,
    headers: {},
  }

  const authToken = getAuthToken()
  if (authToken) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: authToken,
    }
  }

  if (data) {
    fetchOptions = {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  }

  return fetchOptions
}

export const setAuthToken = (token: AuthToken): void => {
  window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
}

export const removeAuthToken = (): void => {
  window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
}

const getAuthToken = (): AuthToken => window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
