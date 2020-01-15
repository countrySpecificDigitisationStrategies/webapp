import React from 'react'
import { useParams } from 'react-router-dom'
import { BlockDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Block = () => {
  const { [APP_ROUTE_PARAMS.blockId]: blockId } = useParams<typeof APP_ROUTE_PARAMS>()
  return blockId ? <BlockDetail id={+blockId} /> : null
}

export default Block
