import React from 'react'
import { Avatar, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { DateFormatter } from '../dateFormatter'
import { UserModel } from '../../models/user.discussion.model'

interface ThreadMetadataProps {
  author: UserModel
  threadCreated: Date
  threadUpdated: Date
  preview?: boolean
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

export const ThreadMetadata = ({
  author,
  threadCreated,
  threadUpdated,
  preview = false,
}: ThreadMetadataProps): JSX.Element => {
  const classes = useThreadMetadataStyles()

  return (
    <div className={classes.author}>
      <Typography variant="caption">{`asked at ${DateFormatter.convertToString(threadCreated)} ${
        !preview && threadCreated !== threadUpdated ? `(edited at ${DateFormatter.convertToString(threadUpdated)})` : ''
      } by ${author.firstName || 'unknown'}`}</Typography>
      {author.countryFlag ? (
        <Avatar variant={'square'} src={author.countryFlag} className={classes.smallAvatar} />
      ) : null}
    </div>
  )
}
