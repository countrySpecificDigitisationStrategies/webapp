import React from 'react'
import { Strategy } from 'features/strategies/store'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'

interface StrategyCardProps {
  strategy: Strategy
}

const StrategyCard = ({ strategy }: StrategyCardProps) => (
  <Card className="strategy-card">
    <CardContent>
      <Typography variant="overline" color="textSecondary" gutterBottom>
        Strategy
      </Typography>
      <Typography variant="h5" component="h2">
        {strategy.title}
      </Typography>
    </CardContent>
    <CardMedia
      className="strategy-card__media"
      image="https://flagpedia.net/data/flags/normal/af.png"
      title={strategy.title}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {strategy.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">View Strategy</Button>
    </CardActions>
  </Card>
)

export default StrategyCard
