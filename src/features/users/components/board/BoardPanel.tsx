import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { Board, getBoard, getUsersByIds } from 'features/users/store'
import { useBoardData } from 'features/users/components/hooks'
import { getCountry } from 'features/countries/store/selectors'
import { getStrategyByCountryId } from 'features/strategies/store'
import { useStrategyData } from 'features/strategies/components'
import { useCountryData } from 'features/countries/components/hooks'
import { Link } from 'react-router-dom'
import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'

interface BoardInfoProps {
  boardId: Board['id']
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    flag: {
      flex: '0 0 130px',
    },
    content: {
      padding: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between',
      flex: '1 1 auto',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
    },
    country: {
      marginBottom: theme.spacing(1),
    },
    users: {
      padding: theme.spacing(1),
      flexWrap: 'wrap',
    },
    userBadge: {
      margin: theme.spacing(0.5),
    },
    strategyButtons: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      flexShrink: 0,
    },
  })
)

export const BoardPanel = ({ boardId }: BoardInfoProps) => {
  const classes = useStyles()

  useBoardData()

  /* TODO: Move country/strategy stuff to strategy feature */
  useCountryData()
  useStrategyData()

  const board = useSelector(getBoard(boardId))

  const userIds = board ? board.users : []
  const users = useSelector(getUsersByIds(userIds))

  const countryId = board ? board.country : NaN
  const country = useSelector(getCountry(countryId))
  const strategy = useSelector(getStrategyByCountryId(countryId))

  return (
    <Card className={classes.root}>
      {country && <CardMedia className={classes.flag} image={country.flag || country.flagRectangle} />}
      <div className={classes.content}>
        <div className={classes.info}>
          <CardHeader title={country?.name} />
          <CardContent className={classes.users}>
            {users.map(user => (
              <Chip key={user.id} label={user.email} className={classes.userBadge} />
            ))}
          </CardContent>
        </div>
        <div className={classes.strategyButtons}>
          {strategy ? (
            <>
              <Button
                component={Link}
                to={APP_ROUTES.strategy.replace(`:${APP_ROUTE_PARAMS.strategyId}`, String(strategy.id))}
                variant="outlined">
                View Strategy
              </Button>
              <Button
                component={Link}
                to={APP_ROUTES.editor.update.replace(`:${APP_ROUTE_PARAMS.strategyId}`, String(strategy.id))}
                variant="outlined">
                Edit Strategy
              </Button>
            </>
          ) : (
            <Button component={Link} to={APP_ROUTES.editor.create} variant="outlined">
              Add Strategy
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
