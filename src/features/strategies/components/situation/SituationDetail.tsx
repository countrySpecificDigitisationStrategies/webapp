import React from 'react'
import { useSelector } from 'react-redux'
import { getSituation, getStrategy, Situation, Strategy } from 'features/strategies/store'
import {
  EntityDetailView,
  EntityType,
  MeasureGrid,
  useSituationData,
  useStrategyData,
} from 'features/strategies/components'

interface SituationDetailProps {
  situationId: Situation['id']
  strategyId: Strategy['id']
}

const SituationDetail = ({ situationId, strategyId }: SituationDetailProps) => {
  useSituationData()
  useStrategyData()

  const situation = useSelector(getSituation(situationId))
  const strategy = useSelector(getStrategy(strategyId))

  if (!(situation && strategy))
    return (
      <div>
        Could not find Situation with id {situationId} on Strategy with id {strategyId}
      </div>
    )

  const measureIds = situation.measures.filter(measure => strategy.measures.includes(measure))
  const renderMeasureGrid = () => <MeasureGrid ids={measureIds} />

  return (
    <EntityDetailView
      entityType={EntityType.Block}
      entityId={situationId}
      strategyId={strategyId}
      title={situation.title}
      description={situation.description}
      nextLevel={{
        title: 'Measures',
        render: renderMeasureGrid,
      }}
    />
  )
}

export default SituationDetail
