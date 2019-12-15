import React from 'react'
import { useSelector } from 'react-redux'
import { getBlock, Block } from 'features/strategies/store'
import { useBlockData } from 'features/strategies/components/hooks'
import StandardView from 'shared/components/standard-view/StandardView'
import { SituationGrid } from 'features/strategies/components/index'

interface BlockDetailProps {
  id: Block.id
}

const BlockDetail = ({ id }: BlockDetailProps) => {
  useBlockData()
  const block = useSelector(getBlock(id))
  if (!block) return <div>Could not find Block with id {id}</div>

  const renderSituationGrid = () => <SituationGrid ids={block.situations} />
  return (
    <StandardView
      title={block.title}
      description={block.description}
      nextLevel={{
        title: 'Situations',
        render: renderSituationGrid,
      }}
    />
  )
}

export default BlockDetail
