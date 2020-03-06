import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, CardActionArea, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { Assessment, Timeline, Message } from '@material-ui/icons'
import { APP_ROUTES } from 'app/routes'

export default function Home(): JSX.Element {
  return (
    <>
      <Typography
        variant="inherit"
        color="textPrimary"
        component="h1"
        style={{ textAlign: 'center', marginBottom: '5px' }}>
        Digital Strategies Companion
      </Typography>

      <div style={{ position: 'relative', color: 'white', height: '400px' }}>
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Picture of people"
          style={{ opacity: '0.8', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ margin: '20px auto', maxWidth: '80%' }}>
        <Typography variant="inherit" color="textPrimary" component="p">
          Many developing countries struggle with set ting the correct priorities when it comes to developing strategies
          for the deployment of IT. However, as digital systems now permeate all walks of life, expanding and improving
          them are crucial for catching up to developed nations.
          <br />
          This platform is aimed at officials and citizens of developing countries that wish to help create a concrete
          strategy plan to improve the situation of their digital infrastructure. It has 3 major sections:
        </Typography>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <Grid container spacing={3} justify={'center'}>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            style={{
              margin: '1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <CardActionArea component={Link} to={APP_ROUTES.analyses}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Assessment style={{ float: 'left' }} />
                  Analysis
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The analyses section provides facts about individual countries, which help the user to find a country
                  comparable to their own.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            style={{
              margin: '1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <CardActionArea component={Link} to={APP_ROUTES.strategies}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Timeline style={{ float: 'left' }} />
                  Strategies
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The strategy section allows confirmed country officials to create a strategy plan for their country
                  and regular users to view the created strategy plans.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            style={{
              margin: '1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <CardActionArea component={Link} to={APP_ROUTES.discussions}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Message style={{ float: 'left' }} />
                  Discussion
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The discussion section allows everybody to discuss individual measures and strategies and how they
                  might be modified to better fit any given country.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>

      <footer>
        <hr />
        <div className="footer-wrapper">
          Welcome to Digital Strategies Companion <strong>DiSCo</strong>.
          <br />
          The whole process of the platform is governed by the IT-Boards of the individual countries. The IT-Boards
          consist of several members appointed by law.
          <List className="list-horizontal-display">
            <ListItem component={Link} to={APP_ROUTES.impressum}>
              <ListItemText primary="Impressum" />
            </ListItem>
            <ListItem component={Link} to={APP_ROUTES.termsOfUse}>
              <ListItemText primary="Terms of use" />
            </ListItem>
            <ListItem component={Link} to={APP_ROUTES.theTeam}>
              <ListItemText primary="The Team" />
            </ListItem>
          </List>
        </div>
      </footer>
    </>
  )
}
