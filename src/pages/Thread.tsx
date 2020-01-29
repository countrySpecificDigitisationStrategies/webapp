import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Endpoint, get } from '../app/service'
import {
  BuildingBlockResponse,
  mapResponseToBuildingBlock,
} from '../features/discussions/components/detailHeader/models/buildingBlock.discussion.model'

const Thread = () => {
  const location = useLocation()
  const { threadId } = useParams()
  const [contentUrl, setContentUrl] = useState()
  const [thread, setThread] = useState()

  useEffect(() => {
    setContentUrl(`/${location.pathname.split('/')[3]}/${threadId}`)
  }, [location])

  useEffect(() => {
    //TODO
    if (contentUrl) {
      // const fetchData = async () => {
      //   const response = (await get(Endpoint.blocks, { id: `${id}` })) as BuildingBlockResponse
      //   setBuildingBlock(mapResponseToBuildingBlock(response))
      // }
      // fetchData()
    }
  }, [contentUrl])

  return <div>Thread</div>
}

export default Thread
