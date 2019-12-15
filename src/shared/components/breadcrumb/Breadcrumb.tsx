import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Typography } from '@material-ui/core'

export const Breadcrumb = ({ location }: RouteComponentProps) => {
  return (
    <Typography variant="overline" className="breadcrumb">
      {location.pathname
        .split('/')
        .slice(1)
        .join(' > ')}
    </Typography>
  )
}
