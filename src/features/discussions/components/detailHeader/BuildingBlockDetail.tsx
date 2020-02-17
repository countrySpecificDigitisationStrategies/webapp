import React, { useEffect, useState } from 'react'
import { Endpoint, get } from 'app/service'
import {
  BuildingBlockModel,
  BuildingBlockResponse,
  mapResponseToBuildingBlock,
} from './models/buildingBlock.discussion.model'
import { HeaderContent } from './HeaderContent.dumb'
import { DetailProps } from './models/detailProps.model'

export const BuildingBlockDetail = ({ id }: DetailProps): JSX.Element => {
  const [buildingBlock, setBuildingBlock] = useState<BuildingBlockModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.blocks, { post: `${id}` })) as BuildingBlockResponse
      setBuildingBlock(mapResponseToBuildingBlock(response))
    }
    fetchData()
  }, [id])

  return <HeaderContent title={buildingBlock?.title} description={buildingBlock?.description} />
}
