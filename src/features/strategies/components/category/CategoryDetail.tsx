import React from 'react'
import { useSelector } from 'react-redux'
import { getCategory, Category, Strategy, getStrategy } from 'features/strategies/store'
import { useCategoryData, SituationGrid, useStrategyData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface CategoryDetailProps {
  categoryId: Category['id']
  strategyId: Strategy['id']
}

const CategoryDetail = ({ categoryId, strategyId }: CategoryDetailProps) => {
  useCategoryData()
  useStrategyData()

  const category = useSelector(getCategory(categoryId))
  const strategy = useSelector(getStrategy(strategyId))

  if (!(category && strategy))
    return (
      <div>
        Could not find Category with id {categoryId} on Strategy with id {strategyId}
      </div>
    )

  const situationIds = category.situations.filter(situation => strategy.situations.includes(situation))
  const renderSituationGrid = () => <SituationGrid ids={situationIds} />

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
