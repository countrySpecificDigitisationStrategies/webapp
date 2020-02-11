import React from 'react'
import { CommentModel } from '../../models/comment.discussion.model'
import { Card, CardActions, CardContent } from '@material-ui/core'
import { ThreadActions } from './ThreadActions'
import { Markdown } from '../../../../shared/components'

interface CommentProps {
  comment: CommentModel
}

export const Comment = ({ comment }: CommentProps): JSX.Element => {
  return (
    <Card>
      <CardContent>
        <Markdown markdown={comment.description} onCard={true} />
      </CardContent>
      <CardActions>
        <ThreadActions />
      </CardActions>
    </Card>
  )
}
