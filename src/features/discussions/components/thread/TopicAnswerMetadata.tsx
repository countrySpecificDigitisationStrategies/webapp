import React from 'react'
import { Avatar, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { DateFormatter } from '../dateFormatter'
import { UserModel } from '../../models/user.discussion.model'

interface TopicAnswerMetadataProps {
  author: UserModel
  created: Date
  updated?: Date
  preview?: boolean
  answer?: boolean
  reply?: boolean
}

const useThreadMetadataStyles = makeStyles((theme: Theme) =>
  createStyles({
    author: {
      display: 'flex',
      alignItems: 'center',
      '& > *:not(:first-child)': {
        marginLeft: '2.5px',
      },
      '& > *:not(:last-child)': {
        marginRight: '2.5px',
      },
    },
    smallAvatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  })
)

export const TopicAnswerMetadata = ({
  author,
  created,
  updated,
  preview = false,
  answer = false,
  reply = false,
}: TopicAnswerMetadataProps): JSX.Element => {
  const classes = useThreadMetadataStyles()

  return (
    <div className={classes.author}>
      <Typography variant="caption" color="textSecondary">{`${
        answer ? 'answered' : reply ? 'replied' : 'asked'
      } at ${DateFormatter.convertToString(created)} ${
        !preview && updated && created !== updated ? `(edited at ${DateFormatter.convertToString(updated)})` : ''
      } by ${author.firstName || 'unknown'}`}</Typography>
      {author.countryFlag ? (
        <Avatar variant={'square'} src={author.countryFlag} className={classes.smallAvatar} />
      ) : null}
    </div>
  )
}
