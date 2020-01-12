import React, { useEffect, useState } from 'react'
import {
  CardActions,
  CardContent,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { Endpoint, get } from '../../../app/service'
import { mapResponseToStrategy, StrategyModel, StrategyResponse } from '../models/strategy.discussion.model'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
)

interface StrategyHeaderContentProps {
  id: number
}

export const StrategyHeaderContent = ({ id }: StrategyHeaderContentProps): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [strategy, setStrategy] = useState<StrategyModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies, `${id}`)) as StrategyResponse
      setStrategy(mapResponseToStrategy(response))
    }
    fetchData()
  }, [])

  if (!strategy) return <CardContent>No Data</CardContent>

  return (
    <>
      <CardContent>
        <Typography variant="h3" component="h1">
          {strategy.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{strategy.description}</Typography>
        </CardContent>
      </Collapse>
    </>
  )
}
