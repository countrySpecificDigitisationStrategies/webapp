import React from 'react'
import { useParams } from 'react-router-dom'
import { CategoryDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Category = () => {
  const { [APP_ROUTE_PARAMS.categoryId]: categoryId } = useParams<typeof APP_ROUTE_PARAMS>()
  return categoryId ? <CategoryDetail id={+categoryId} /> : null
}

export default Category
