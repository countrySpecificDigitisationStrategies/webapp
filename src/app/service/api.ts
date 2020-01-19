import { getAuthToken } from 'app/service/authentication'
import { ApiError } from 'app/service/error'

// eslint-disable-next-line no-undef
const baseUrl = process.env.API_URL

export enum Endpoint {
  register = 'auth/register',
  login = 'auth/login',
  logout = 'users/logout',
  strategies = 'strategies',
  blocks = 'building-blocks',
  situationCategories = 'situation-categories',
  situations = 'situations',
  measures = 'building-blocks', //TODO: should be changed to /measures when api delivers them
  strategyMeasures = 'strategy-measures',
  strategyThreads = 'strategy-threads',
  buildingBlock = 'building-block-threads',
  situationCategoryThreads = 'situation-category-threads',
  situationThreads = 'situation-threads',
  strategyMeasureThreads = 'strategy-measure-threads',
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type ApiResponse = object | ApiError

export const get = async (endpoint: Endpoint, post?: number | string): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint, post), HttpMethod.GET)
}

export const post = async (endpoint: Endpoint, data: object): Promise<ApiResponse> => {
  return fetchFromApi(buildUrl(endpoint), HttpMethod.POST, data)
}

const buildUrl = (endpoint: Endpoint, post?: number | string) => {
  const url = baseUrl + endpoint
  if (post && post !== '') {
    return url + '/' + post
  }
  return url
}

const fetchFromApi = async (url, method: HttpMethod, data?: object): Promise<ApiResponse> => {
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
