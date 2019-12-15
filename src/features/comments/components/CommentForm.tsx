import React from 'react'
import { getData, getError, Comments, CommentsState } from 'features/comments/store'
import { useCommentsData } from 'src/features/comments/components/hooks'
import { useSelector } from 'react-redux'
import { Button, CircularProgress, Typography } from '@material-ui/core'

interface CommentFormProps {
  id: Comments.id
}

const CommentForm = ({ id }: CommentFormProps) => {
  useCommentsData()
  const error: CommentsState.error = useSelector(getError)
  const comments: CommentsState.data = useSelector(getData)
  const comment: Comments | null = comments ? comments[id] : null

  if (!error && !comments) return <CircularProgress />
  if (error) return <div>{error.detail}</div>
  if (!comment) return <div>Be the first to comment</div>

  return (
    <div className="comments">
      <Typography variant="overline" className="strategy-detail__preheading">
        {comment.author}
      </Typography>
      <Typography variant="h3" className="strategy-detail__heading">
        {comment.title}
      </Typography>
      <Typography variant="h5" className="strategy-detail__subheading">
        Analysis
      </Typography>
      <Typography variant="body1" className="strategy-detail__description">
        {comment.description}
      </Typography>
      <Button color="primary" variant="contained">
        Reply
      </Button>
    </div>
  )
}
export default CommentForm
