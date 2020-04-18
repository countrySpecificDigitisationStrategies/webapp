import React from 'react'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'
import { useDiscussionDetailData } from '../../store/hooks'
import { View } from '../../../../shared/enums'
import { useSelector } from 'react-redux'
import { getDiscussionSituationCategoryData } from '../../store/selectors'

export const SituationCategoryDetail = ({ id }: DetailProps): JSX.Element => {
  useDiscussionDetailData(View.SituationCategory, id)
  const situationCategory = useSelector(getDiscussionSituationCategoryData(id))

  return (
    <HeaderContent
      title={situationCategory?.title}
      description={situationCategory?.description}
      goalTitle={situationCategory?.goalTitle}
      goalDescription={situationCategory?.goalDescription}
    />
  )
}
