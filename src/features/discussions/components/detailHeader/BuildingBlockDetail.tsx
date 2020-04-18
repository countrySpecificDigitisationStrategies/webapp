import React from 'react'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'
import { useDiscussionDetailData } from '../../store/hooks'
import { View } from '../../../../shared/enums'
import { useSelector } from 'react-redux'
import { getDiscussionBuildingBlockData } from '../../store/selectors'

export const BuildingBlockDetail = ({ id }: DetailProps): JSX.Element => {
  useDiscussionDetailData(View.BuildingBlock, id)
  const buildingBlock = useSelector(getDiscussionBuildingBlockData(id))

  return <HeaderContent title={buildingBlock?.title} description={buildingBlock?.description} />
}
