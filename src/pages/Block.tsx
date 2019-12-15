import React from 'react'
import { useParams } from 'react-router-dom'
import { BlockDetail } from 'features/strategies/components'

const Block = () => {
  const { blockId } = useParams()
  return <BlockDetail id={blockId} />
}

export default Block
