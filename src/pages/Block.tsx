import React from 'react'
import { useParams } from 'react-router-dom'
import { BlockDetail } from 'features/strategies/components'
import { APP_ROUTE_PARAMS } from 'app/routes'

const Block = () => {
  const params = useParams<typeof APP_ROUTE_PARAMS>()
  const { [APP_ROUTE_PARAMS.strategyId]: strategyId, [APP_ROUTE_PARAMS.blockId]: blockId } = params

  return blockId ? <BlockDetail strategyId={+strategyId} blockId={+blockId} /> : null
}

export default Block
