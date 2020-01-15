import React from 'react'
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
    content: {
      paddingBottom: '0 !important',
    },
    actions: {
      paddingTop: 0,
    },
    paragraph: {
      marginBottom: 0,
    },
  })
)

interface HeaderContentProps {
  title?: string
  description?: string
  titleGoal?: string
  descriptionGoal?: string
}

export const HeaderContent = ({ title, description, titleGoal, descriptionGoal }: HeaderContentProps): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <CardContent>
        <Typography variant="h4" component="h1">
          {title ? title : ''}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" collapsedHeight={'64px'}>
        <CardContent className={classes.content}>
          <Typography paragraph className={classes.paragraph}>
            {description
              ? description.length > 180 && !expanded
                ? `${description.substring(0, 180)}...`
                : description
              : ''}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing className={classes.actions}>
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
    </>
  )
}
