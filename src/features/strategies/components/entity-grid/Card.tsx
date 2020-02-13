import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 300,
      height: '100%',
    },
    actionArea: {
      height: '100%',
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      marginBottom: theme.spacing(2),
      flexGrow: 1,
    },
    description: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
    },
  })
)

export interface EntityCardProps {
  overline?: string
  title?: string
  image?: string
  description?: string
  link?: string
}

export const EntityCard = ({ overline, title, description, link }: EntityCardProps) => {
  const classes = useStyles()
  const content = (
    <CardContent className={classes.content}>
      <div className={classes.header}>
        {overline && (
          <Typography variant="overline" color="textSecondary" gutterBottom>
            {overline}
          </Typography>
        )}
        {title && (
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        )}
      </div>
      {description && (
        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {description}
        </Typography>
      )}
    </CardContent>
  )

  return (
    <Card className={classes.card}>
      {link ? (
        <CardActionArea component={Link} to={link} className={classes.actionArea}>
          {content}
        </CardActionArea>
      ) : (
        content
      )}
    </Card>
  )
}
