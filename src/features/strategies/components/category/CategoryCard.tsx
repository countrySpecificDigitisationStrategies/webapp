import React from 'react'
import { Category } from 'features/strategies/store'
import { OptionsCard } from 'shared/components'
import { useHistory } from 'react-router'

export interface CategoryCardProps {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const history = useHistory()
  return (
    <OptionsCard
      title={category.title}
      overline="Category"
      description={category.description}
      link={{
        to: `${history.location.pathname}/${category.id}`,
        title: 'View Category',
      }}
    />
  )
}
