import { Category } from './types'
import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'
import { CategoryResponse } from 'features/strategies/store/types.api'

export const CATEGORIES_REQUEST_ID = 'categories'
export const CATEGORIES_ADD = 'categories/add'

interface CategoriesAdd {
  type: typeof CATEGORIES_ADD
  categories: Category[]
}

export type CategoryActions = CategoriesAdd

export const loadCategories = () =>
  createRequest<CategoryResponse[]>({
    id: CATEGORIES_REQUEST_ID,
    request: () => get(Endpoint.categories),
    onSuccess: data => addCategories(transformResponseData(data)),
  })

const addCategories = (categories: Category[]): CategoriesAdd => ({
  type: CATEGORIES_ADD,
  categories,
})

const transformResponseData = (categories: CategoryResponse[]): Category[] => {
  return categories.map(({ buildingBlock, created, updated, ...category }) => ({
    ...category,
    block: buildingBlock,
    created: new Date(created),
    updated: new Date(updated),
  }))
}
