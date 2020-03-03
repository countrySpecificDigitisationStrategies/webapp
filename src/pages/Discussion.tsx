import React from 'react'
import { DiscussionDetail, DiscussionsTree } from 'features/discussions/components'

const Discussion = () => {
  return (
    <div className="DiscussionContainer">
      <DiscussionsTree />
      <DiscussionDetail />
    </div>
  )
}

export default Discussion
