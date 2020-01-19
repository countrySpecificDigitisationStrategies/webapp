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
  const [activeFilter, setActiveFilter] = useState(0)

  const filters = [
    {
      title: 'Newest',
      sortFn: (a: PreviewThreadModel, b: PreviewThreadModel) => b.created.getTime() - a.created.getTime(),
    },
    {
      title: 'Oldest',
      sortFn: (a: PreviewThreadModel, b: PreviewThreadModel) => a.created.getTime() - b.created.getTime(),
    },
    {
      title: 'Activity',
      sortFn: (a: PreviewThreadModel, b: PreviewThreadModel) => b.commentCount - a.commentCount,
    },
    {
      title: 'Unanswered',
    },
  ]

  const [previewThreads, setPreviewThreads] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategyMeasureThreads)) as PreviewThreadResponse[]
      setPreviewThreads(mapResponseToPreviewThreads(response))
    }
    fetchData()
  }, [])

  if (!previewThreads) return <div>No threads found</div>

  let sortedThreads = previewThreads
  if (filters[activeFilter].sortFn) sortedThreads = previewThreads.sort(filters[activeFilter].sortFn)

  if (filters[activeFilter].title === 'Unanswered')
    sortedThreads = previewThreads.filter((t: PreviewThreadModel) => t.commentCount === 0)

  return (
    <div className={`${className}`}>
      <ButtonGroup className={`${className}-filter`} color="primary" aria-label="outlined primary button group">
        {filters.map((filter, index) => {
          const variant = activeFilter === index ? 'contained' : 'outlined'

          return (
            <Button key={index} variant={variant} onClick={() => setActiveFilter(index)}>
              {filter.title}
            </Button>
          )
        })}
      </ButtonGroup>

      {sortedThreads?.length !== 0 ? (
        sortedThreads.map((thread: PreviewThreadModel, index: number) => (
          <ThreadPreview key={index} itemClassName={`${className}-item`} thread={thread} />
        ))
      ) : (
        <div>No threads found matching your filter</div>
      )}
    </div>
  )
}
