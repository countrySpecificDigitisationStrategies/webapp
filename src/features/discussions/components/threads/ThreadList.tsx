import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { ThreadPreview } from 'features/discussions/components/threads'
import { get } from 'app/service'
import { getEndpointForView } from 'features/discussions/components/discussionDetail'
import {
  mapResponseToPreviewThreads,
  PreviewThreadModel,
  PreviewThreadResponse,
} from 'features/discussions/models/thread.discussion.model'
import { useLoginStatus } from 'shared/hooks'
import { View } from '../discussionDetail'

interface ThreadListProps {
  displayedView: View
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
  const isLoggedIn = useLoginStatus()

  const getQueryParams = (): string => {
    switch (displayedView) {
      case View.Strategy:
        return `?strategy=${strategyId}`
      case View.BuildingBlock:
        return `?strategy=${strategyId}&buiding_block=${contentId}`
      case View.SituationCategory:
        return `?strategy=${strategyId}&situation_category=${contentId}`
      case View.Situation:
        return `?strategy=${strategyId}&situation=${contentId}`
      case View.StrategyMeasure:
        return `?strategy_measure=${contentId}`
      default:
        return ''
    }
  }

  useEffect(() => {
    const endpoint = getEndpointForView(displayedView)
    const options = {
      queryParams: getQueryParams(),
    }
    const fetchData = async () => {
      const response = (await get(endpoint, options)) as PreviewThreadResponse[]
      setPreviewThreads(mapResponseToPreviewThreads(response))
    }
    fetchData()
  }, [strategyId, contentId])

  if (!previewThreads) return <div>No threads found</div>

  let sortedThreads = previewThreads
  if (filters[activeFilter].sortFn) sortedThreads = previewThreads.sort(filters[activeFilter].sortFn)

  if (filters[activeFilter].title === 'Unanswered')
    sortedThreads = previewThreads.filter((t: PreviewThreadModel) => t.commentCount === 0)

  return (
    <div className={`${className}`}>
      <div className={`${className}-actions`}>
        {previewThreads.length !== 0 ? (
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
        ) : (
          <Typography color={'primary'} variant={'caption'}>
            {`There are no discussions yet. Start one!`}
          </Typography>
        )}

        {isLoggedIn ? (
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Comment />}
            component={Link}
            to={`/discussions/${strategyId}/new-thread`}>
            new discussion
          </Button>
        ) : (
          <div className={`${className}-actions__login-register`}>
            <Typography color={'primary'} variant={'caption'}>
              Login to start a discussion.
            </Typography>
            <Button variant="text" color="primary" component={Link} to={`/login`}>
              login
            </Button>
            <Button variant="contained" color="secondary" component={Link} to={`/register`}>
              register
            </Button>
          </div>
        )}
      </div>

      {previewThreads.length !== 0 ? (
        sortedThreads?.length !== 0 ? (
          sortedThreads.map((thread: PreviewThreadModel, index: number) => (
            <ThreadPreview key={index} view={displayedView} itemClassName={`${className}-item`} thread={thread} />
          ))
        ) : (
          <div>No threads found matching your filter</div>
        )
      ) : null}
    </div>
  )
}
