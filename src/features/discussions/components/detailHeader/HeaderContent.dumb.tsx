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
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  })
)

interface HeaderContentProps {
  title?: string
  description?: string
  goalTitle?: string
  goalDescription?: string
  strategyMeasureDescription?: string
}

export const HeaderContent = ({
  title,
  description,
  goalTitle,
  goalDescription,
  strategyMeasureDescription,
}: HeaderContentProps): JSX.Element => {
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
          {goalTitle && goalDescription ? (
            <>
              <Typography variant="h5" component="h2">
                {goalTitle}
              </Typography>
              <Typography paragraph className={classes.paragraph}>
                {goalDescription.length > 180 && !expanded
                  ? `${goalDescription.substring(0, 180)}...`
                  : goalDescription}
              </Typography>
            </>
          ) : null}
          {strategyMeasureDescription ? (
            <Typography paragraph className={classes.paragraph}>
              {strategyMeasureDescription.length > 180 && !expanded
                ? `${strategyMeasureDescription.substring(0, 180)}...`
                : strategyMeasureDescription}
            </Typography>
          ) : null}
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
