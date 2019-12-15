import React from 'react'
import { Block } from 'features/strategies/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'
import { useHistory } from 'react-router'

export interface BlockCardProps {
  block: Block
}

export const BlockCard = ({ block }: BlockCardProps) => {
  const history = useHistory()
  return (
    <OptionsCard
      title={block.title}
      overline="Building Block"
      description={block.description}
      link={{
        to: `${history.location.pathname}/${block.id}`,
        title: 'View Block',
      }}
    />
  )
}
