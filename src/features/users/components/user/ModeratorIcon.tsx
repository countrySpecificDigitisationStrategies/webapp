import React from 'react'
import { Avatar, AvatarProps, createStyles, makeStyles, Theme, Tooltip } from '@material-ui/core'
import { Gavel } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    icon: {
      fontSize: 'inherit',
    },
  })
)

export const ModeratorIcon = (avatarProps: AvatarProps) => {
  const classes = useStyles()
  const { className, ...remainingProps } = avatarProps
  const avatarClass = className ? `${className} ${classes.avatar}` : classes.avatar

  const title = 'Moderator'

  return (
    <Tooltip title={title}>
      <Avatar {...remainingProps} alt={title} className={avatarClass}>
        <Gavel className={classes.icon} />
      </Avatar>
    </Tooltip>
  )
}
