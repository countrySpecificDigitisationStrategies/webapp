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
import clsx from 'clsx'
import {
  mapResponseToStrategyMeasure,
  StrategyMeasureModel,
  StrategyMeasureResponse,
} from '../models/strategyMeasure.discussion.model'

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

interface StrategyMeasureHeaderContentProps {
  id: number
}

export const StrategyMeasureHeaderContent = ({ id }: StrategyMeasureHeaderContentProps): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [strategyMeasure, setStrategyMeasure] = useState<StrategyMeasureModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategyMeasures, `${id}?type=discussion`)) as StrategyMeasureResponse
      setStrategyMeasure(mapResponseToStrategyMeasure(response))
    }
    fetchData()
  }, [])

  if (!strategyMeasure) return <CardContent>No Data</CardContent>

  return (
    <>
      <CardContent>
        <Typography variant="h3" component="h1">
          {strategyMeasure.measureTitle}
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
          <Typography paragraph>{strategyMeasure.measureDescription}</Typography>
          <Typography paragraph>{strategyMeasure.description}</Typography>
        </CardContent>
      </Collapse>
    </>
  )
}
