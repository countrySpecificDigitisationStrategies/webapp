import { Category } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const CATEGORIES_REQUEST_ID = 'categories'
export const CATEGORIES_ADD = 'categories/add'

interface CategoriesAdd {
  type: typeof CATEGORIES_ADD
  categories: Category[]
}

export type CategoryActions = CategoriesAdd

export const loadCategories = () =>
  createRequest({
    id: CATEGORIES_REQUEST_ID,
    request: () => get(Endpoint.categories),
    onSuccess: addCategories,
  })

const addCategories = (categories: Category[]): CategoriesAdd => ({
  type: CATEGORIES_ADD,
  categories,
})
