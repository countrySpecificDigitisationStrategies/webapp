import React from 'react'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'
import { useSelector } from 'react-redux'
import { View } from '../../../../shared/enums'
import { useDiscussionDetailData } from '../../store/hooks'
import { getDiscussionStrategyData } from '../../store/selectors'

export const StrategyDetail = ({ id }: DetailProps): JSX.Element => {
  useDiscussionDetailData(View.Strategy, id)
  const strategy = useSelector(getDiscussionStrategyData(id))

  return <HeaderContent title={strategy?.title} description={strategy?.description} />
}
