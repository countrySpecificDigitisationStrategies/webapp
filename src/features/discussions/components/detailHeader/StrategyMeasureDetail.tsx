import React, { useEffect, useState } from 'react'
import { Endpoint, get } from '../../../../app/service'
import {
  mapResponseToStrategyMeasure,
  StrategyMeasureModel,
  StrategyMeasureResponse,
} from '../../models/strategyMeasure.discussion.model'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './detailProps.model'

export const StrategyMeasureDetail = ({ id }: DetailProps): JSX.Element => {
  const [strategyMeasure, setStrategyMeasure] = useState<StrategyMeasureModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategyMeasures, `${id}?type=discussion`)) as StrategyMeasureResponse
      setStrategyMeasure(mapResponseToStrategyMeasure(response))
    }
    fetchData()
  }, [id])

  return (
    <HeaderContent
      title={strategyMeasure?.measureTitle}
      description={strategyMeasure?.measureDescription}
      strategyMeasureDescription={strategyMeasure?.description}
    />
  )
}
