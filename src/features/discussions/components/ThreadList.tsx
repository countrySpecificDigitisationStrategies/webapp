import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { ThreadPreview } from 'features/discussions/components'
import { Endpoint, get } from 'app/service'
import {
  mapResponseToPreviewThreads,
  PreviewThreadModel,
  PreviewThreadResponse,
} from 'features/discussions/models/thread.discussion.model'
import { DiscussionDetailView } from './discussionDetail'

interface ThreadListProps {
  displayedView: DiscussionDetailView
  strategyId: number
  contentId?: number
}

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
]

export const ThreadList = ({ displayedView, strategyId, contentId }: ThreadListProps) => {
  const className = 'ThreadList'
  const [activeFilter, setActiveFilter] = useState(0)
  const [previewThreads, setPreviewThreads] = useState()

  const getEndpoint = () => {
    switch (displayedView) {
      case DiscussionDetailView.Strategy:
        return Endpoint.strategyThreads
      case DiscussionDetailView.BuildingBlock:
        return Endpoint.buildingBlockThreads
      case DiscussionDetailView.SituationCategory:
        return Endpoint.situationCategoryThreads
      case DiscussionDetailView.Situation:
        return Endpoint.situationThreads
      default:
        return Endpoint.strategyMeasureThreads
    }
  }

  const getQueryParams = (): string => {
    switch (displayedView) {
      case DiscussionDetailView.Strategy:
        return `?strategy=${strategyId}`
      case DiscussionDetailView.BuildingBlock:
        return `?strategy=${strategyId}&buiding_block=${contentId}`
      case DiscussionDetailView.SituationCategory:
        return `?strategy=${strategyId}&situation_category=${contentId}`
      case DiscussionDetailView.Situation:
        return `?strategy=${strategyId}&situation=${contentId}`
      case DiscussionDetailView.StrategyMeasure:
        return `?strategy_measure=${contentId}`
      default:
        return ''
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(getEndpoint(), { queryParams: getQueryParams() })) as PreviewThreadResponse[]
      setPreviewThreads(mapResponseToPreviewThreads(response))
    }
    fetchData()
  }, [contentId])

  if (!previewThreads) return <div>No threads found</div>

  let sortedThreads = previewThreads
  if (filters[activeFilter].sortFn) sortedThreads = previewThreads.sort(filters[activeFilter].sortFn)

  if (filters[activeFilter].title === 'Unanswered')
    sortedThreads = previewThreads.filter((t: PreviewThreadModel) => t.commentCount === 0)

  return (
    <div className={`${className}`}>
      <div className={`${className}-actions`}>
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

        <Button
          variant="contained"
          color="secondary"
          startIcon={<Comment />}
          component={Link}
          to={`/discussions/${strategyId}/new-thread`}>
          new discussion
        </Button>
      </div>

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
