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
  mapResponseToSituationCategory,
  SituationCategoryModel,
  SituationCategoryResponse,
} from '../models/situationCategory.discussion.model'

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

interface SituationCategoryHeaderContentProps {
  id: number
}

export const SituationCategoryHeaderContent = ({ id }: SituationCategoryHeaderContentProps): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const [situationCategory, setSituationCategory] = useState<SituationCategoryModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.situationCategories, `${id}`)) as SituationCategoryResponse
      setSituationCategory(mapResponseToSituationCategory(response))
    }
    fetchData()
  }, [id])

  if (!situationCategory) return <CardContent>No Data</CardContent>

  return (
    <>
      <CardContent>
        <Typography variant="h3" component="h1">
          {situationCategory.title}
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
          <Typography paragraph>{situationCategory.description}</Typography>
          <Typography variant="h4" component="h2">
            {situationCategory.goalTitle}
          </Typography>
          <Typography paragraph>{situationCategory.goalDescription}</Typography>
        </CardContent>
      </Collapse>
    </>
  )
}
