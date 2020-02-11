import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Endpoint, get } from '../app/service'
import {
  mapResponseToThread,
  ThreadModel,
  ThreadResponse,
} from '../features/discussions/models/thread.discussion.model'
import { Topic } from '../features/discussions/components/thread/Topic'

const getEndpoint: (path: string) => Endpoint = path => {
  switch (path.split('/')[3]) {
    case Endpoint.strategyThreads:
      return Endpoint.strategyThreads
    case Endpoint.buildingBlockThreads:
      return Endpoint.buildingBlockThreads
    case Endpoint.situationCategoryThreads:
      return Endpoint.situationCategoryThreads
    case Endpoint.situationThreads:
      return Endpoint.situationThreads
    default:
      return Endpoint.strategyMeasureThreads
  }
}

const Thread = () => {
  const location = useLocation()
  const { threadId } = useParams()
  const [endpoint, setEndpoint] = useState<Endpoint>()
  const [thread, setThread] = useState<ThreadModel>()

  useEffect(() => {
    setEndpoint(getEndpoint(location.pathname))
  }, [location])

  useEffect(() => {
    if (endpoint && threadId) {
      const fetchData = async () => {
        const response = (await get(endpoint, { id: +threadId })) as ThreadResponse
        setThread(mapResponseToThread(response))
      }
      fetchData()
    }
  }, [endpoint, threadId])

  return <Topic thread={thread} />
}

export default Thread
