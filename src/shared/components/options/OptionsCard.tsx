import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'

export interface OptionsCardProps {
  overline?: string
  title?: string
  image?: string
  description?: string
  link?: { title: string; to: string }
}

export const OptionsCard = ({ overline, title, image, description, link }: OptionsCardProps) => {
  const className = 'options-card'

  const overlineFragment = overline ? (
    <Typography variant="overline" color="textSecondary" gutterBottom>
      {overline}
    </Typography>
  ) : null

  const titleFragment = title ? (
    <Typography variant="h5" component="h2">
      {title}
    </Typography>
  ) : null

  const imageFragment = image ? (
    <CardMedia className={`${className}__media`} image={image} title={title || overline || 'image'} />
  ) : null

  const descriptionFragment = description ? (
    <Typography variant="body2" color="textSecondary" component="p" className={`${className}__description`}>
      {description}
    </Typography>
  ) : null

  const actionsFragment = link ? (
    <CardActions>
      <Button size="small" component={Link} to={link.to}>
        {link.title}
      </Button>
    </CardActions>
  ) : null

  return (
    <Card className={className}>
      <CardContent>
        {overlineFragment}
        {titleFragment}
      </CardContent>
      {imageFragment}
      <CardContent>{descriptionFragment}</CardContent>
      {actionsFragment}
    </Card>
  )
}
