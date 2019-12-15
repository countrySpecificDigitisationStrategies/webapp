import React from 'react'
import { Situation } from 'features/strategies/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'
import { useHistory } from 'react-router'

export interface SituationCardProps {
  situation: Situation
}

export const SituationCard = ({ situation }: SituationCardProps) => {
  const history = useHistory()
  return (
    <OptionsCard
      title={situation.title}
      overline="Situation"
      description={situation.description}
      link={{
        to: `${history.location.pathname}/situation/${situation.id}`,
        title: 'View Situation',
      }}
    />
  )
}
