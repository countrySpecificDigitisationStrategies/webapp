import React from 'react'
import { useSelector } from 'react-redux'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

import { useAccountData } from 'features/users/components/hooks'
import { Account, getAccount } from 'features/users/store'
import { BoardList } from 'features/users/components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    generalInfo: {},
    boards: {
      marginTop: theme.spacing(3),
    },
    boardHeader: {
      marginBottom: theme.spacing(2),
    },
  })
)

export const AccountInfo = () => {
  const classes = useStyles()

  useAccountData()
  const account = useSelector(getAccount)

  if (Object.entries.length <= 0) return <>Not logged in</>

  const { firstName, lastName, email, boards, created } = account as Account

  return (
    <div className={classes.root}>
      <div className={classes.generalInfo}>
        <div>
          Name: {firstName} {lastName}
        </div>
        <div>E-Mail: {email}</div>
        <div>Member Since: {created?.toDateString()}</div>
      </div>
      {boards?.length > 0 ? (
        <div className={classes.boards}>
          <Typography variant="h4" className={classes.boardHeader}>
            Boards
          </Typography>
          <BoardList ids={boards} />
        </div>
      ) : null}
    </div>
  )
}
