import React from 'react'
import { useSelector } from 'react-redux'
import { useBlockData } from 'features/strategies/components/hooks'
import { getBlocks, StrategiesState, Block } from 'features/strategies/store'
import { OptionsGrid } from 'shared/components/options/OptionsGrid'
import { BlockCard } from 'features/strategies/components/block/BlockCard'

export interface BlockGridProps {
  ids: Block.id[]
}

const BlockGrid = ({ ids }: BlockGridProps): JSX.Element => {
  useBlockData()
  const blocks: StrategiesState.blocks = useSelector(getBlocks)
  if (!blocks) return <div>No Building Blocks could be found.</div>
  return (
    <OptionsGrid
      dataset={blocks}
      filter={block => ids.includes(block.id)}
      render={(id, block) => <BlockCard block={block} />}
    />
  )
}

export default BlockGrid