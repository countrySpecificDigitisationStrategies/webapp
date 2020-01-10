import React from 'react'
import { useSelector } from 'react-redux'
import { useSituationData } from 'features/strategies/components/hooks'
import { getSituations, Situation } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { SituationCard } from './SituationCard'

export interface SituationGridProps {
  ids: Situation['id'][]
}

const SituationGrid = ({ ids }: SituationGridProps): JSX.Element => {
  useSituationData()
  const situations = useSelector(getSituations)
  if (!situations) return <div>No Situations could be found.</div>
  return (
    <OptionsGrid<Situation>
      dataset={situations}
      filter={situation => ids.includes(situation.id)}
      render={(_id, situation) => <SituationCard situation={situation} />}
    />
  )
}

export default SituationGrid
