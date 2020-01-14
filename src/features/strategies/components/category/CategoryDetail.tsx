import React from 'react'
import { useSelector } from 'react-redux'
import { getCategory, Category } from 'features/strategies/store'
import { useCategoryData, SituationGrid } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface CategoryDetailProps {
  id: Category['id']
}

const CategoryDetail = ({ id }: CategoryDetailProps) => {
  useCategoryData()
  const category = useSelector(getCategory(id))
  if (!category) return <div>Could not find Category with id {id}</div>

  const renderSituationGrid = () => <SituationGrid ids={category.situations} />
  return (
    <StandardView
      title={category.title}
      description={category.description}
      nextLevel={{
        title: 'Situations',
        render: renderSituationGrid,
      }}
    />
  )
}

export default CategoryDetail
