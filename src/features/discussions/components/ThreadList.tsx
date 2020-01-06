import React, { useState } from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import { ThreadPreview } from '.'

export const ThreadList = () => {
  const className = 'ThreadList'
  const [activeFilter, setActiveFilter] = useState(0)

  const filters = [
    { id: 1, title: 'Newest' }, // TODO add sort function
    { id: 2, title: 'Latest Activity' }, // TODO add sort function
  ]

  const mockThreads = [
    { id: 1, title: 'Thread title', description: 'Thread description', user: 1, commentCount: 10 },
    { id: 2, title: 'Thread title', description: 'Thread description', user: 1, commentCount: 10 },
    { id: 3, title: 'Thread title', description: 'Thread description', user: 1, commentCount: 10 },
  ]

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

      {mockThreads.map((thread, index) => (
        <ThreadPreview key={index} thread={thread} />
      ))}
    </div>
  )
}
