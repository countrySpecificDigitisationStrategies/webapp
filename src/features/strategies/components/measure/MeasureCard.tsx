import React from 'react'
import { Measure } from 'features/strategies/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'
import { useHistory } from 'react-router'

export interface MeasureCardProps {
  measure: Measure
}

export const MeasureCard = ({ measure }: MeasureCardProps) => {
  const history = useHistory()
  return (
    <OptionsCard
      title={measure.title}
      overline="Measure"
      description={measure.description}
      link={{
        to: `${history.location.pathname}/measure/${measure.id}`,
        title: 'View Measure',
      }}
    />
  )
}
