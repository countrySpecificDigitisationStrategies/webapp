import React from 'react'
import { Comments } from 'features/comments/store'

interface CommentProps {
  comment: Comments
}

const Comment = ({ comment }: CommentProps) => (
  <div className="comment">
    <span className="commentAuthor">{this.props.author}</span>
    <div className="content" />
    <span className="commentDescription">{this.props.text}</span>
  </div>
)

export default Comment
