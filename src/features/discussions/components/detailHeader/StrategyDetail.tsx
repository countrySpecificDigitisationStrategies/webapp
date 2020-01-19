import React, { useEffect, useState } from 'react'
import { Endpoint, get } from '../../../../app/service'
import { mapResponseToStrategy, StrategyModel, StrategyResponse } from './models/strategy.discussion.model'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'

export const StrategyDetail = ({ id }: DetailProps): JSX.Element => {
  const [strategy, setStrategy] = useState<StrategyModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies, `${id}`)) as StrategyResponse
      setStrategy(mapResponseToStrategy(response))
    }
    fetchData()
  }, [id])

  return <HeaderContent title={strategy?.title} description={strategy?.description} />
}
