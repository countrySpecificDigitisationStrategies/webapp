import React from 'react'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'
import { useDiscussionDetailData } from '../../store/hooks'
import { View } from '../../../../shared/enums'
import { getDiscussionSituationData } from '../../store/selectors'
import { useSelector } from 'react-redux'

export const SituationDetail = ({ id }: DetailProps): JSX.Element => {
  useDiscussionDetailData(View.Situation, id)
  const situation = useSelector(getDiscussionSituationData(id))

  return <HeaderContent title={situation?.title} description={situation?.description} />
}
