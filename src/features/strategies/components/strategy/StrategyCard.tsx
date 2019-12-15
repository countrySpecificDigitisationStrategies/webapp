import React from 'react'
import { Strategy } from 'features/strategies/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'

export interface StrategyCardProps {
  strategy: Strategy
}

export const StrategyCard = ({ strategy }: StrategyCardProps) => (
  <OptionsCard
    title={strategy.title}
    overline={strategy.overline}
    image="https://flagpedia.net/data/flags/normal/af.png"
    description={strategy.description}
    link={{
      to: `/strategies/${strategy.id}`,
      title: 'View Strategy',
    }}
  />
)
