import React from 'react'
import { Card, CardActions, CardContent, CardHeader, createStyles, Divider, makeStyles, Theme } from '@material-ui/core'
import { Markdown } from '../../../../shared/components'
import { ThreadModel } from '../../models/thread.discussion.model'
import { ThreadMetadata } from './ThreadMetadata'
import { ThreadActions } from './ThreadActions'

interface TopicProps {
  thread: ThreadModel | undefined
}

const useCardContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
  })
)

const useCardActionsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
)

export const Topic = ({ thread }: TopicProps): JSX.Element => {
  const cardContentClasses = useCardContentStyles()
  const cardActionsClasses = useCardActionsStyles()

  if (!thread) return <></>

  return (
    <Card>
      {thread ? (
        <>
          <CardHeader
            title={thread.title}
            titleTypographyProps={{ variant: 'h3' }}
            subheader={
              <ThreadMetadata author={thread.user} threadCreated={thread.created} threadUpdated={thread.updated} />
            }
          />
          <Divider />
          <CardContent classes={cardContentClasses}>
            <Markdown markdown={thread.description} onCard={true} />
          </CardContent>
          <CardActions />
          <Divider />
          <CardActions classes={cardActionsClasses}>
            <ThreadActions />
          </CardActions>
        </>
      ) : (
        <></>
      )}
    </Card>
  )
}
