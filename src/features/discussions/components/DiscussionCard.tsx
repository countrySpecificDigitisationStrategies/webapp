import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { StrategyModel } from './detailHeader/models/strategy.discussion.model'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export interface DiscussionCardProps {
  strategy: StrategyModel
}

export const DiscussionCard = ({ strategy }: DiscussionCardProps) => {
  const { id, title, country } = strategy
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/discussions/${id}`}>
        <CardMedia className={classes.media} image={country.flag} title={`Flag of ${country.name}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
