import React from 'react'
import { useParams } from 'react-router-dom'
import { BlockDetail } from 'features/strategies/components'

const Block = () => {
  const { blockId } = useParams()
  return blockId ? <BlockDetail id={+blockId} /> : null
}

export default Block
