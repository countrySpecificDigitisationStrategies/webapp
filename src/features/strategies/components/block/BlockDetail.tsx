import React from 'react'
import { useSelector } from 'react-redux'
import { getBlock, Block, Strategy, getStrategy } from 'features/strategies/store'
import { CategoryGrid, useBlockData, useStrategyData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface BlockDetailProps {
  blockId: Block['id']
  strategyId: Strategy['id']
  renderNextLevel?: boolean
}

const BlockDetail = ({ blockId, strategyId, renderNextLevel = true }: BlockDetailProps) => {
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

  const viewProps = {
    title: block.title,
    description: block.description,
    ...(renderNextLevel && {
      nextLevel: {
        title: 'Categories',
        render: renderCategoryGrid,
      },
    }),
  }

  return <StandardView {...viewProps} />
}

export default BlockDetail
