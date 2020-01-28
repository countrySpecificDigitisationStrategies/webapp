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
  situationCategories = 'situation-categories',
  situations = 'situations',
  measures = 'measures',
  strategyMeasures = 'strategy-measures',
  strategyThreads = 'strategy-threads',
  buildingBlockThreads = 'building-block-threads',
  situationCategoryThreads = 'situation-category-threads',
  situationThreads = 'situation-threads',
  strategyMeasureThreads = 'strategy-measure-threads',
  account = 'users/me',
  countries = 'countries',
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type ApiResponse = object | ApiError

interface OptionsType {
  post?: number | string
  queryParams?: string
  id?: number
}

export const get = async (endpoint: Endpoint, options?: OptionsType): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint, options), HttpMethod.GET)
}

export const patch = async (endpoint: Endpoint, id?: number): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint, id), HttpMethod.PATCH)
}

export const post = async (endpoint: Endpoint, data: object): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint), HttpMethod.POST, data)
}

export const put = async (endpoint: Endpoint, id: number, data: object): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint, { id }), HttpMethod.PUT, data)
}
const buildUrl = (endpoint: Endpoint, options?: OptionsType) => {
  const post = options?.post
  const queryParams = options?.queryParams
  const id = options?.id

  let url = baseUrl + endpoint
  if (id) {
    url += '/' + id
  } else {
    if (!!post && post !== '') url += '/' + post
    if (queryParams) url += queryParams
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
