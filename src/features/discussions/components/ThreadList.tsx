import React, { useState, useEffect } from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import { ThreadPreview } from 'features/discussions/components'
import { get, Endpoint } from 'app/service'
import {
  PreviewThreadResponse,
  mapResponseToPreviewThreads,
  PreviewThreadModel,
} from 'features/discussions/models/thread.discussion.model'

export const ThreadList = () => {
  const className = 'ThreadList'
  const [activeFilter, setActiveFilter] = useState()

  const filters = [
    { id: 1, title: 'Latest' },
    { id: 2, title: 'Oldest' },
  ]

  const [previewThreads, setPreviewThreads] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.threads)) as PreviewThreadResponse[]
      setPreviewThreads(mapResponseToPreviewThreads(response))
    }
    fetchData()
  }, [])

  if (!previewThreads) return <div>No threads found</div>

  let sortedThreads = previewThreads
  if (activeFilter === 1) {
    sortedThreads = previewThreads.sort((a: PreviewThreadModel, b: PreviewThreadModel) => {
      return b.created.getTime() - a.created.getTime()
    })
  } else if (activeFilter === 2) {
    sortedThreads = previewThreads.sort((a: PreviewThreadModel, b: PreviewThreadModel) => {
      return a.created.getTime() - b.created.getTime()
    })
  }

  return (
    <div className={`${className}`}>
      <ButtonGroup className={`${className}-filter`} color="primary" aria-label="outlined primary button group">
        {filters.map((filter, index) => {
          const variant = activeFilter === filter.id ? 'contained' : 'outlined'

          return (
            <Button key={index} variant={variant} onClick={() => setActiveFilter(filter.id)}>
              {filter.title}
            </Button>
          )
        })}
      </ButtonGroup>

      {sortedThreads.map((thread: PreviewThreadModel, index: number) => (
        <ThreadPreview key={index} itemClassName={`${className}-item`} thread={thread} />
      ))}
    </div>
  )
}
