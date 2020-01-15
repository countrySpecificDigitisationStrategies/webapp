import React from 'react'

import { ThreadList } from 'features/discussions/components/ThreadList'
import { DetailHeader } from './detailHeader/DetailHeader'

export const DiscussionDetail = () => {
  return (
    <div className="DiscussionDetail">
      <DetailHeader />

      <ThreadList />
    </div>
  )
}
