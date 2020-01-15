import React from 'react'
import { useSelector } from 'react-redux'
import { getBlock, Block } from 'features/strategies/store'
import { CategoryGrid, useBlockData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface BlockDetailProps {
  id: Block['id']
}

const BlockDetail = ({ id }: BlockDetailProps) => {
  useBlockData()
  const block = useSelector(getBlock(id))
  if (!block) return <div>Could not find Block with id {id}</div>

  const renderCategoryGrid = () => <CategoryGrid ids={block.categories} />
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
