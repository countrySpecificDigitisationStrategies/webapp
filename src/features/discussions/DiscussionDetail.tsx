import React from 'react'
import { Typography } from '@material-ui/core'

import { ThreadList } from 'features/discussions/ThreadList'

export const DiscussionDetail = () => {
  return (
    <div className="DiscussionDetail">
      <Typography variant="h3">DiscussionDetail</Typography>

      <ThreadList />
    </div>
  )
}
