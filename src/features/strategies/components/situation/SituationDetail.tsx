import React from 'react'
import { useSelector } from 'react-redux'
import { getSituation, getStrategy, Situation, Strategy } from 'features/strategies/store'
import { MeasureGrid, useSituationData, useStrategyData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface SituationDetailProps {
  situationId: Situation['id']
  strategyId: Strategy['id']
  renderNextLevel?: boolean
}

const SituationDetail = ({ situationId, strategyId, renderNextLevel = true }: SituationDetailProps) => {
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

  const viewProps = {
    title: situation.title,
    description: situation.description,
    ...(renderNextLevel && {
      nextLevel: {
        title: 'Measures',
        render: renderMeasureGrid,
      },
    }),
  }

  return <StandardView {...viewProps} />
}

export default SituationDetail
