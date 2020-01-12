import React from 'react'
import { Strategy } from 'features/strategies/store'
import { OptionsCard } from 'shared/components'

export interface StrategyCardProps {
  strategy: Strategy
}

export const StrategyCard = ({ strategy }: StrategyCardProps) => (
  <OptionsCard
    title={strategy.country.name}
    image={strategy.country.flag}
    description={strategy.description}
    link={{
      to: `/strategies/${strategy.id}`,
      title: 'View Strategy',
    }}
  />
)
