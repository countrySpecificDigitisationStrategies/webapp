import React from 'react'
import { Avatar, Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PreviewThreadModel } from 'features/discussions/models/thread.discussion.model'
import { Markdown } from '../../../shared/components'

interface ThreadPreviewProps {
  thread: PreviewThreadModel
  itemClassName?: string
}

export const ThreadPreview = ({ thread, itemClassName = '' }: ThreadPreviewProps) => {
  const className = 'ThreadPreview'

  const { id, title, description, user, commentCount, created } = thread

  const formattedDate =
    created.getFullYear() +
    '-' +
    (created.getMonth() + 1) +
    '-' +
    created.getDate() +
    ' ' +
    created.getHours() +
    ':' +
    created.getMinutes() +
    ':' +
    created.getSeconds()

  return (
    <Card className={`${itemClassName} ${className}`}>
      <CardActionArea component={Link} to={`/discussions/${id}/threads/${id}`}>
        <div className={`${className}-mainContent`}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {commentCount || 0}
            </Typography>
            <Typography variant="caption" display="block">
              answers
            </Typography>
          </CardContent>

          <CardContent>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>

            <Markdown markdown={description} onCard={true} previewLinks={true} />
          </CardContent>
        </div>
        <CardContent className={`${className}-sideContent`}>
          <Typography className={`${className}-author`} variant="caption">
            {`asked at ${formattedDate} by ${user.firstName || 'unknown'}`}
          </Typography>
          <Avatar variant="square" alt={`${user.firstName} ${user.lastName}`} src={user.countryFlag as string} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
