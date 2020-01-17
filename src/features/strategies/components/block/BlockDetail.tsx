import React from 'react'
import { useSelector } from 'react-redux'
import { getBlock, Block } from 'features/strategies/store'
import { CategoryGrid, useBlockData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface BlockDetailProps {
  id: Block['id']
  renderNextLevel?: boolean
}

const BlockDetail = ({ id, renderNextLevel = true }: BlockDetailProps) => {
  useBlockData()
  const block = useSelector(getBlock(id))
  if (!block) return <div>Could not find Block with id {id}</div>

  const renderCategoryGrid = () => <CategoryGrid ids={block.categories} />
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
