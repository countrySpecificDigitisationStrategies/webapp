import React from 'react'
import { Typography, Grid, createStyles, makeStyles, Theme, Paper, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from 'app/routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      background: 'linear-gradient(135deg, #63A1C6 60%, #FBC02D 100%)',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      height: '100%',
    },
  })
)

export default function Home(): JSX.Element {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h3" align="center">
        Digitization strategies for developing countries
      </Typography>
      <Typography variant="body1" align="center">
        Many developing countries struggle with setting the correct priorities when it comes to developing strategies
        for the deployment of IT. However, as digital systems now permeate all walks of life, expanding and improving
        them are crucial for catching up to developed nations.
      </Typography>
      <Typography variant="body1" align="center">
        This platform is aimed at officials and citizens of developing countries that wish to help create a concrete
        strategy plan to improve the situation of their digital infrastructure. It has 3 major sections:
      </Typography>
      <Typography variant="body1" component="ul">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              The analyses section provides facts about individual countries, which help the user to find a country
              comparable to their own.
              <br />
              <br />
              <br />
              <Button variant="outlined" component={Link} color="secondary" to={APP_ROUTES.analyses}>
                Analyses
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              The strategy section allows confirmed country officials to create a strategy plan for their country and
              regular users to view the created strategy plans.
              <br />
              <br />
              <Button variant="outlined" component={Link} color="secondary" to={APP_ROUTES.strategies}>
                Strategies
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              The discussion section allows everybody to discuss individual measures and strategies and how they might
              be modified to better fit any given country.
              <br />
              <br />
              <Button variant="outlined" component={Link} color="secondary" to={APP_ROUTES.discussion}>
                Discussions
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Typography>
      <Typography variant="body1" align="center">
        The whole process of the platform is governed by the IT-Boards of the individual countries. The IT-Boards
        consist of several members appointed by law.
      </Typography>
    </>
  )
}
