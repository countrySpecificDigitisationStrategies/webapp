import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { EntityGrid } from 'features/strategies/components/entity-grid/Grid'
import { useBlockData } from 'features/strategies/components/hooks'
import { getBlocks, Block } from 'features/strategies/store'

export interface BlockGridProps {
  ids: Block['id'][]
}

const BlockGrid = ({ ids }: BlockGridProps): JSX.Element => {
  useBlockData()
  const blocks = useSelector(getBlocks) || {}
  const history = useHistory()
  return (
    <EntityGrid
      dataset={Object.values(blocks)}
      emptyMessage="No Building Blocks could be found."
      sortBy="title"
      filter={block => ids.includes(block.id)}
      card={({ title, description, id }) => ({
        title,
        description,
        overline: 'Building Block',
        link: `${history.location.pathname}/${id}`,
      })}
    />
  )
}

export default BlockGrid
