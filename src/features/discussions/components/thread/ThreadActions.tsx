import React, { useState } from 'react'
import { useLoginStatus } from '../../../../shared/hooks'
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { Comment } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import { AnswerForm } from 'features/discussions/components/thread'

interface ThreadActionsProps {
  areTopicActions?: boolean
}

const useThreadActionsStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    loginRegisterContainer: {
      alignItems: 'center',
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
  })
)

export const ThreadActions = ({ areTopicActions = false }: ThreadActionsProps): JSX.Element => {
  const classes = useThreadActionsStyles()
  const isLoggedIn = useLoginStatus()
  const [answerReplyClicked, setAnswerReplyClicked] = useState<boolean>(false)

  const handleAnswerReplyClick = () => {
    setAnswerReplyClicked(true)
  }

  if (!answerReplyClicked) {
    return (
      <div className={classes.container}>
        <Button variant="outlined" color="secondary" startIcon={<Comment />} onClick={handleAnswerReplyClick}>
          {areTopicActions ? 'answer' : 'reply'}
        </Button>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className={`${classes.container} ${classes.loginRegisterContainer}`}>
        <Typography color={'primary'} variant={'caption'}>
          Login to {areTopicActions ? 'answer' : 'reply'}.
        </Typography>
        <Button variant="text" color="primary" component={Link} to={`/login`}>
          login
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to={`/register`}>
          register
        </Button>
      </div>
    )
  }

  return <AnswerForm />
}
