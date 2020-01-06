import React from 'react'
import { DiscussionDetail, DiscussionTree } from 'features/discussions/components'

const Discussion = () => {
  return (
    <div className="DiscussionContainer">
      <DiscussionTree />
      <DiscussionDetail />
    </div>
  )
}

export default Discussion
