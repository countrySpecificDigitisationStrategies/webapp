import React from 'react'
import { useSelector } from 'react-redux'
import { getStrategy, Strategy } from 'features/strategies/store'
import { BlockGrid, EntityDetailView, EntityType, useStrategyData } from 'features/strategies/components'
import { AnalysisButton } from 'features/analyses/components/AnalysisButton'

interface StrategyDetailProps {
  id: Strategy['id']
}

const StrategyDetail = ({ id }: StrategyDetailProps) => {
  useStrategyData()
  const strategy = useSelector(getStrategy(id))
  if (!strategy) return <div>Could not find Strategy with id {id}</div>

  const renderBlockGrid = () => <BlockGrid ids={strategy.blocks} />
  return (
    <EntityDetailView
      entityType={EntityType.Strategy}
      entityId={id}
      title={strategy.title}
      subtitle={strategy.country.name}
      description={strategy.description}
      renderInfo={() => <AnalysisButton countryId={strategy.country.id} />}
      nextLevel={{
        title: 'Building Blocks',
        render: renderBlockGrid,
      }}
    />
  )
}

export default StrategyDetail
