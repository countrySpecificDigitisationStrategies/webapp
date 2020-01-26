import React from 'react'
import { useSelector } from 'react-redux'
import { useCategoryData } from 'features/strategies/components/hooks'
import { getCategories, Category } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components'
import { CategoryCard } from './CategoryCard'

export interface CategoryGridProps {
  ids: Category['id'][]
}

const CategoryGrid = ({ ids }: CategoryGridProps): JSX.Element => {
  useCategoryData()
  const categories = useSelector(getCategories)
  if (!categories) return <div>No Categories could be found.</div>
  return (
    <OptionsGrid<Category>
      dataset={categories}
      sortBy={'title'}
      filter={category => ids.includes(category.id)}
      render={(_id, category) => <CategoryCard category={category} />}
    />
  )
}

export default CategoryGrid
