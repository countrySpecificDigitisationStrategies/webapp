import React from 'react'
import { DiscussionDetail, DiscussionTree } from 'features/discussions'

const Discussion = () => {
  return (
    <div className="DiscussionContainer">
      <DiscussionTree />
      <DiscussionDetail />
    </div>
  )
}

export default Discussion
