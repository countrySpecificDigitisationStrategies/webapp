import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { EntityGrid } from 'features/strategies/components/entity-grid/Grid'
import { useMeasureData } from 'features/strategies/components/hooks'
import { getMeasures, Measure } from 'features/strategies/store'

export interface MeasureGridProps {
  ids: Measure['id'][]
}

const MeasureGrid = ({ ids }: MeasureGridProps): JSX.Element => {
  useMeasureData()
  const measures = useSelector(getMeasures) || {}
  const history = useHistory()
  return (
    <EntityGrid
      dataset={Object.values(measures)}
      emptyMessage="No Measures could be found."
      sortBy="title"
      filter={measure => ids.includes(measure.id)}
      card={({ title, description, id }) => ({
        title,
        description,
        overline: 'Measure',
        link: `${history.location.pathname}/${id}`,
      })}
    />
  )
}

export default MeasureGrid
