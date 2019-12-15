import React from 'react'
import { useSelector } from 'react-redux'
import { useCommentsData } from './hooks'
import { getData, getError, CommentsState } from '../store'
import { CircularProgress, Grid } from '@material-ui/core'
import Comment from 'features/comments/components/Comment'

const CommentList = (): JSX.Element => {
  useCommentsData()
  const error: CommentsState.error = useSelector(getError)
  const comments: CommentsState.data = useSelector(getData)

  if (!error && !comments) return <CircularProgress />
  if (error) return <div>{error.detail}</div>
  if (!comments) return <div>No Comments could be found.</div>

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
      {Object.keys(comments).map(id => {
        return (
          <Grid item key={id}>
            <Comment comment={comments[id]} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CommentList
