import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

import { APP_ROUTES } from 'app/routes'
import { CountryIcon } from 'features/countries'

import { Account, getAccount } from 'features/users/store'
import { BoardList, useAccountData } from 'features/users/components'
import { AvatarGroup } from '@material-ui/lab'
import { ModeratorIcon } from 'features/users/components/account-info/ModeratorIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    generalInfo: {},
    headline: {
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      marginRight: theme.spacing(2),
    },
    icon: {
      height: theme.spacing(4),
      width: theme.spacing(4),
      fontSize: theme.spacing(2),
    },
    editButton: {
      marginTop: theme.spacing(3),
    },
    boards: {
      marginTop: theme.spacing(5),
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
  const { firstName, lastName, email, country = NaN, boards, isModerator, created } = account as Account

  return (
    <div className={classes.root}>
      <div className={classes.generalInfo}>
        <div className={classes.headline}>
          <Typography variant="h5" className={classes.name}>
            {firstName || lastName ? `${firstName} ${lastName}` : 'Anonymous'}
          </Typography>
          <AvatarGroup>
            <CountryIcon id={country} className={classes.icon} />
            {isModerator && <ModeratorIcon className={classes.icon} />}
          </AvatarGroup>
        </div>
        {email && <Typography variant={'subtitle1'}>{email}</Typography>}
        {created && (
          <Typography variant={'overline'} component={'p'}>
            Member since {created.toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit' })}
          </Typography>
        )}
        <Button variant={'contained'} component={Link} to={APP_ROUTES.account} className={classes.editButton}>
          Edit Information
        </Button>
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
