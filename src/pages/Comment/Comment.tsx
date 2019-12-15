import React from 'react'
import { useParams } from 'react-router-dom'
import { CommentList } from 'features/comment'

const Comment = () => {
  const { id } = useParams()
  return (
    <div className="comments-container">
      <CommentList id={id} />
    </div>
  )
}

export default Comment
