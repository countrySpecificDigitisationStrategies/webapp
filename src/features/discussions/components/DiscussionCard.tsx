import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { StrategyModel } from './detailHeader/models/strategy.discussion.model'
import { Link } from 'react-router-dom'
import { Language } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '100px',
      backgroundColor: theme.palette.primary.main,
    },
  })
)

export interface DiscussionCardProps {
  strategy: StrategyModel
}

export const DiscussionCard = ({ strategy }: DiscussionCardProps) => {
  const { id, title, country } = strategy
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/discussions/${id}`}>
        <CardMedia
          className={classes.media}
          image={country.flag || country.flagRectangle || undefined}
          title={`Flag of ${country.name}`}>
          {!(country.flag || country.flagRectangle) ? <Language fontSize={'inherit'} color={'secondary'} /> : null}
        </CardMedia>
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
