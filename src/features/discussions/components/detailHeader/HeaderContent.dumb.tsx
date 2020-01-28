import React, { useEffect } from 'react'
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
import { Markdown } from '../../../../shared/components'

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
      paddingTop: '0',
    },
    preview: {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        bottom: 0,
        height: '100%',
        width: '100%',
        content: '""',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 12px, rgba(255,255,255,1) 42px)',
      },
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
  const [expandDescription, setExpandDescription] = React.useState(false)
  const [expandGoalDescription, setExpandGoalDescription] = React.useState(false)

  useEffect(() => {
    setExpandDescription(false)
    setExpandGoalDescription(false)
  }, [title])

  const handleExpandDescriptionClick = () => {
    setExpandDescription(!expandDescription)
  }

  const handleExpandGoalDescriptionClick = () => {
    setExpandGoalDescription(!expandGoalDescription)
  }

  return (
    <>
      <CardContent>
        <Typography variant="h4" component="h1">
          {title ? title : ''}
        </Typography>
      </CardContent>
      <Collapse in={expandDescription} timeout="auto" collapsedHeight={'54px'}>
        <CardContent className={classes.content}>
          {description ? (
            <Markdown
              markdown={description}
              onCard={true}
              className={clsx({ [classes.preview]: !expandDescription })}
            />
          ) : null}
          {strategyMeasureDescription ? (
            <Markdown
              markdown={strategyMeasureDescription}
              onCard={true}
              className={clsx({ [classes.preview]: !expandDescription })}
            />
          ) : null}
        </CardContent>
      </Collapse>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expandDescription,
          })}
          onClick={handleExpandDescriptionClick}
          aria-expanded={expandDescription}
          aria-label="show more">
          <ExpandMore />
        </IconButton>
      </CardActions>
      {goalTitle && goalDescription ? (
        <>
          <Collapse in={expandGoalDescription} timeout="auto" collapsedHeight={'86px'}>
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h1">
                {goalTitle}
              </Typography>
              <Markdown
                markdown={goalDescription}
                onCard={true}
                className={clsx({ [classes.preview]: !expandGoalDescription })}
              />
            </CardContent>
          </Collapse>
          <CardActions disableSpacing className={classes.actions}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expandGoalDescription,
              })}
              onClick={handleExpandGoalDescriptionClick}
              aria-expanded={expandGoalDescription}
              aria-label="show more">
              <ExpandMore />
            </IconButton>
          </CardActions>
        </>
      ) : null}
    </>
  )
}
