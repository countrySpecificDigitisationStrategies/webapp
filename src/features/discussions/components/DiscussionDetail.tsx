import React from 'react'

import { ThreadList } from 'features/discussions/components/ThreadList'
import { DiscussionDetailHeader } from './DiscussionDetailHeader'

export const DiscussionDetail = () => {
  return (
    <div className="DiscussionDetail">
      <DiscussionDetailHeader />

      <ThreadList />
    </div>
  )
}
