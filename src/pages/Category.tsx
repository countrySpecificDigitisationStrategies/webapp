import React from 'react'
import { useParams } from 'react-router-dom'
import { CategoryDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Category = () => {
  const params = useParams<typeof APP_ROUTE_PARAMS>()
  const { [APP_ROUTE_PARAMS.strategyId]: strategyId, [APP_ROUTE_PARAMS.categoryId]: categoryId } = params

  return categoryId ? <CategoryDetail strategyId={+strategyId} categoryId={+categoryId} /> : null
}

export default Category
