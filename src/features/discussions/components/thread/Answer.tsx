import React from 'react'
import { CommentModel } from '../../models/comment.discussion.model'
import { Card, CardActions, CardContent, createStyles, Divider, makeStyles, Theme } from '@material-ui/core'
import { ThreadActions } from './ThreadActions'
import { Markdown } from 'shared/components'
import { TopicAnswerMetadata } from './TopicAnswerMetadata'

export interface Answer {
  rootComment: CommentModel
  replies: CommentModel[]
}

interface AnswerProps {
  answer: Answer
}

const useCardActionsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
)

export const Answer = ({ answer }: AnswerProps): JSX.Element => {
  const cardActionClasses = useCardActionsStyles()

  return (
    <Card>
      <CardContent>
        <Markdown markdown={answer.rootComment.description} onCard={true} />
        <TopicAnswerMetadata author={answer.rootComment.user} created={answer.rootComment.created} answer={true} />
      </CardContent>
      <Divider />
      {answer.replies.map(reply => (
        <div key={`reply-${reply.id}`}>
          <CardContent>
            <Markdown markdown={reply.description} onCard={true} />
            <TopicAnswerMetadata author={reply.user} created={reply.created} reply={true} />
          </CardContent>
          <Divider />
        </div>
      ))}
      <CardActions classes={cardActionClasses}>
        <ThreadActions />
      </CardActions>
    </Card>
  )
}
