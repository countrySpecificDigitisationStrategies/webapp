import React from 'react'
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PreviewThreadModel } from 'features/discussions/models/thread.discussion.model'
import { Markdown } from '../../../shared/components'

interface ThreadPreviewProps {
  thread: PreviewThreadModel
  itemClassName?: string
}

const useAvatarStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  })
)

export const ThreadPreview = ({ thread, itemClassName = '' }: ThreadPreviewProps) => {
  const avatarClasses = useAvatarStyles()
  const className = 'thread-preview'

  const { id, title, description, user, commentCount, created } = thread

  const formattedDate =
    (created.getDate() < 10 ? '0' + created.getDate() : created.getDate()) +
    '.' +
    (created.getMonth() + 1 < 10 ? '0' + (created.getMonth() + 1) : created.getMonth() + 1) +
    '.' +
    created.getFullYear() +
    ' ' +
    created.getHours() +
    ':' +
    created.getMinutes()

  return (
    <Card className={`${itemClassName} ${className}`}>
      <CardActionArea component={Link} to={`/discussions/${id}/threads/${id}`}>
        <div className={`${className}__main-content`}>
          <CardContent className={'main-content__state-info'}>
            <Typography variant="h6" gutterBottom>
              {commentCount || 0}
            </Typography>
            <Typography variant="caption" display="block">
              answers
            </Typography>
          </CardContent>
          <CardContent className={'main-content__thread-details'}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>

            <Collapse in={false} collapsedHeight={'86px'}>
              <Markdown
                markdown={description}
                onCard={true}
                previewLinks={true}
                className={'thread-details__description thread-details__description--gradient'}
              />
            </Collapse>
          </CardContent>
        </div>
        <CardContent className={`${className}__author-info`}>
          <Typography className={`${className}-author`} variant="caption">
            {`asked at ${formattedDate} by ${user.firstName || 'unknown'}`}
          </Typography>
          {user.countryFlag ? (
            <Avatar variant={'square'} src={user.countryFlag} className={avatarClasses.small} />
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
