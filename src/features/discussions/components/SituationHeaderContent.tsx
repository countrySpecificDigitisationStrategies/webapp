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
import { mapResponseToSituation, SituationModel, SituationResponse } from '../models/situation.discussion.model'

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

interface SituationHeaderContentProps {
  id: number
}

export const SituationHeaderContent = ({ id }: SituationHeaderContentProps): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [situation, setSituation] = useState<SituationModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.situations, `${id}`)) as SituationResponse
      setSituation(mapResponseToSituation(response))
    }
    fetchData()
  }, [])

  if (!situation) return <CardContent>No Data</CardContent>

  return (
    <>
      <CardContent>
        <Typography variant="h3" component="h1">
          {situation.title}
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
          <Typography paragraph>{situation.description}</Typography>
        </CardContent>
      </Collapse>
    </>
  )
}
