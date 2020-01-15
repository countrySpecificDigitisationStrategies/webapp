import React from 'react'
import { DiscussionDetail, Tree } from 'features/discussions/components'

const Discussion = () => {
  return (
    <div className="DiscussionContainer">
      <Tree />
      <DiscussionDetail />
    </div>
  )
}

export default Discussion
