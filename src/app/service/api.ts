import camelize from 'camelize'
import decamelize from 'snakecase-keys'
import { getAuthToken } from 'app/service/authentication'
import { ApiError } from 'app/service/error'

// eslint-disable-next-line no-undef
const baseUrl = process.env.API_URL

export enum Endpoint {
  register = 'auth/register',
  login = 'auth/login',
  logout = 'users/logout',
  analyses = 'analyses',
  strategies = 'strategies',
  blocks = 'building-blocks',
  categories = 'situation-categories',
  situations = 'situations',
  measures = 'measures',
  strategyMeasures = 'strategy-measures',
  countries = 'countries',
  boards = 'boards',
  account = 'users/me',
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type ApiResponse = object | ApiError

export const get = async (endpoint: Endpoint, id?: number): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint, id), HttpMethod.GET)
}

export const post = async (endpoint: Endpoint, data: object): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint), HttpMethod.POST, data)
}

export const put = async (endpoint: Endpoint, id: number, data: object): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint, id), HttpMethod.PUT, data)
}

const buildUrl = (endpoint: string, id?: number) => {
  const url = baseUrl + endpoint
  if (id) {
    return url + '/' + id
  }
  return url
}

const fetchFromApi = async (url: string, method: HttpMethod, data?: object): Promise<ApiResponse> => {
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

  return camelize(content)
}

const getFetchOptions = (method: HttpMethod, data?: object): RequestInit => {
  let fetchOptions: RequestInit = {
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
      body: JSON.stringify(decamelize(data)),
    }
  }

  return fetchOptions
}
