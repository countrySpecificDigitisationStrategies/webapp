import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardContent, Typography } from '@material-ui/core'
import { Strategy } from 'features/strategies'

export interface DiscussionCardProps {
  strategy: Strategy
}

export const DiscussionCard = ({ strategy }: DiscussionCardProps) => {
  const { id, title, description } = strategy
  const link = {
    to: `/discussions/countries/${id}`, // TODO change to country id
    title: 'View Discussion',
  }
  const className = 'DiscussionCard'

  return (
    <Card className={className}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <Button size="small" component={Link} to={link.to}>
        {link.title}
      </Button>
    </Card>
  )
}
