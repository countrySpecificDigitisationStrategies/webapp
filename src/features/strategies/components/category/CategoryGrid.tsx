import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { EntityGrid } from 'features/strategies/components/entity-grid/Grid'
import { useCategoryData } from 'features/strategies/components/hooks'
import { getCategories, Category } from 'features/strategies/store'

export interface CategoryGridProps {
  ids: Category['id'][]
}

const CategoryGrid = ({ ids }: CategoryGridProps): JSX.Element => {
  useCategoryData()
  const categories = useSelector(getCategories) || {}
  const history = useHistory()
  return (
    <EntityGrid
      dataset={Object.values(categories)}
      emptyMessage="No Categories could be found."
      sortBy="title"
      filter={category => ids.includes(category.id)}
      card={({ title, description, id }) => ({
        title,
        description,
        overline: 'Category',
        link: `${history.location.pathname}/${id}`,
      })}
    />
  )
}

export default CategoryGrid
