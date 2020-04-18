import React from 'react'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'
import { useDiscussionDetailData } from '../../store/hooks'
import { View } from '../../../../shared/enums'
import { useSelector } from 'react-redux'
import { getDiscussionStrategyMeasureData } from '../../store/selectors'

export const StrategyMeasureDetail = ({ id }: DetailProps): JSX.Element => {
  useDiscussionDetailData(View.StrategyMeasure, id)
  const strategyMeasure = useSelector(getDiscussionStrategyMeasureData(id))

  return (
    <HeaderContent
      title={strategyMeasure?.measureTitle}
      description={strategyMeasure?.measureDescription}
      strategyMeasureDescription={strategyMeasure?.description}
    />
  )
}
