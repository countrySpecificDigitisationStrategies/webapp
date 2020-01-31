import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
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
import { Language } from '@material-ui/icons'
import { Country } from 'features/countries/store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 300,
      '& .title': {
        marginBottom: 0,
      },
      '& .country, .title': {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
    media: {
      height: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '100px',
      backgroundColor: theme.palette.primary.main,
    },
  })
)

export interface CountryCardProps {
  country: Country
  title?: string
  linkTo: LinkProps['to']
}

export const CountryCard = ({ country, title, linkTo }: CountryCardProps) => {
  const classes = useStyles()
  const { name, flag, flagRectangle } = country

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={linkTo}>
        <CardMedia className={classes.media} image={flag || flagRectangle || undefined} title={`Flag of ${name}`}>
          {!(flag || flagRectangle) ? <Language fontSize={'inherit'} color={'secondary'} /> : null}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={'country'}>
            {name}
          </Typography>
          {title && (
            <Typography variant="body2" color="textSecondary" component="p" className={'title'}>
              {title}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
