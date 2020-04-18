import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { Comment } from '@material-ui/icons'

import { ThreadPreview } from 'features/discussions/components/threads'
import { PreviewThreadModel } from 'features/discussions/models/thread.discussion.model'
import { useLoginStatus } from 'shared/hooks'
import { View } from 'shared/enums'
import { discussionTreeService } from '../discussionsTree/DiscussionsTree'
import { useDiscussionPreviewThreads } from '../../store/hooks'
import { useSelector } from 'react-redux'
import { getDiscussionPreviewThreadsData } from '../../store/selectors'

interface ThreadListProps {
  displayedView: View
  strategyId: number
  contentId?: number
  reloadDiscussionTreeData?: boolean
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

export const ThreadList = ({ displayedView, strategyId, contentId, reloadDiscussionTreeData }: ThreadListProps) => {
  const className = 'ThreadList'
  const [activeFilter, setActiveFilter] = useState(0)
  const isLoggedIn = useLoginStatus()

  useDiscussionPreviewThreads(displayedView, strategyId, contentId)

  const previewThreads = useSelector(getDiscussionPreviewThreadsData(displayedView, strategyId, contentId))

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
                <Button
                  key={index}
                  variant={variant}
                  onClick={() => {
                    setActiveFilter(index)
                    if (reloadDiscussionTreeData) {
                      discussionTreeService.reload()
                    }
                  }}>
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
