import React from 'react'
import { useSelector } from 'react-redux'
import { getBlock, Block, Strategy, getStrategy } from 'features/strategies/store'
import { CategoryGrid, useBlockData, useStrategyData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface BlockDetailProps {
  blockId: Block['id']
  strategyId: Strategy['id']
}

const BlockDetail = ({ blockId, strategyId }: BlockDetailProps) => {
  useBlockData()
  useStrategyData()

  const block = useSelector(getBlock(blockId))
  const strategy = useSelector(getStrategy(strategyId))

  if (!(block && strategy))
    return (
      <div>
        Could not find Block with id {blockId} on Strategy with id {strategyId}
      </div>
    )

  const categoryIds = block.categories.filter(category => strategy.categories.includes(category))
  const renderCategoryGrid = () => <CategoryGrid ids={categoryIds} />

  return (
    <StandardView
      title={block.title}
      description={block.description}
      nextLevel={{
        title: 'Categories',
        render: renderCategoryGrid,
      }}
    />
  )
}

export default BlockDetail
