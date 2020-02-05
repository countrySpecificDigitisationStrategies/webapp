import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

export default function Home(): JSX.Element {
  return (
    <>
      <h1>Digitization strategies for developing countries</h1>

      <div style={{ position: 'relative', color: 'white', height: '400px' }}>
        <img
          src="https://mediafiles.mein-haustier.de/wp-content/uploads/2018/02/shutterstock_222861379-1000x608.jpg"
          alt="Picture of people"
          width="99%"
          style={{ opacity: '0.7', width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <p style={{ position: 'absolute', bottom: '1rem', left: '3rem', right: '3rem' }}>
          Many developing countries struggle with setting the correct priorities when it comes to developing strategies
          for the deployment of IT. However, as digital systems now permeate all walks of life, expanding and improving
          them are crucial for catching up to developed nations.
        </p>
      </div>

      <div>
        <p style={{ position: 'relative', marginLeft: '3rem', marginRight: '3rem' }}>
          This platform is aimed at officials and citizens of developing countries that wish to help create a concrete
          strategy plan to improve the situation of their digital infrastructure. It has 3 major sections:
        </p>
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
            <CardActionArea>
              <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <i className="material-icons" style={{ float: 'left' }}>
                    assessment
                  </i>
                  Analysis
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The analyses section provides facts about individual countries, which help the user to find a country
                  comparable to their own.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
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
            <CardActionArea>
              <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <i className="material-icons" style={{ float: 'left' }}>
                    timeline
                  </i>
                  Strategies
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The strategy section allows confirmed country officials to create a strategy plan for their country
                  and regular users to view the created strategy plans.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
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
            <CardActionArea>
              <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <i className="material-icons" style={{ float: 'left' }}>
                    message
                  </i>
                  Discussion
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The discussion section allows everybody to discuss individual measures and strategies and how they
                  might be modified to better fit any given country.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </div>

      <footer>
        <hr />
        <h5 style={{ textAlign: 'center' }}>
          The whole process of the platform is governed by the IT-Boards of the individual countries. The IT-Boards
          consist of several members appointed by law.
        </h5>
      </footer>
    </>
  )
}
