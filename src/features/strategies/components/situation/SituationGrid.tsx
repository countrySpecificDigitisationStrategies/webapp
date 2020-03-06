import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { EntityGrid } from 'features/strategies/components/entity-grid/Grid'
import { useSituationData } from 'features/strategies/components/hooks'
import { getSituations, Situation } from 'features/strategies/store'

export interface SituationGridProps {
  ids: Situation['id'][]
}

const SituationGrid = ({ ids }: SituationGridProps): JSX.Element => {
  useSituationData()
  const situations = useSelector(getSituations) || {}
  const history = useHistory()
  return (
    <EntityGrid
      dataset={Object.values(situations)}
      emptyMessage="No Situations could be found."
      sortBy={'title'}
      filter={situation => ids.includes(situation.id)}
      card={({ title, description, id }) => ({
        title,
        description,
        overline: 'Situation',
        link: `${history.location.pathname}/${id}`,
      })}
    />
  )
}

export default SituationGrid
