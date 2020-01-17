import React from 'react'
import { useSelector } from 'react-redux'
import { getCategory, Category } from 'features/strategies/store'
import { useCategoryData, SituationGrid } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface CategoryDetailProps {
  id: Category['id']
  renderNextLevel?: boolean
}

const CategoryDetail = ({ id, renderNextLevel = true }: CategoryDetailProps) => {
  useCategoryData()
  const category = useSelector(getCategory(id))
  if (!category) return <div>Could not find Category with id {id}</div>

  const renderSituationGrid = () => <SituationGrid ids={category.situations} />
  const viewProps = {
    title: category.title,
    description: category.description,
    ...(renderNextLevel && {
      nextLevel: {
        title: 'Situations',
        render: renderSituationGrid,
      },
    }),
  }

  return <StandardView {...viewProps} />
}

export default CategoryDetail
