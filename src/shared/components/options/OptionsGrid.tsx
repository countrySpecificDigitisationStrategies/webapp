import React from 'react'
import { Grid } from '@material-ui/core'

export interface OptionsGridProps {
  dataset: { [id: string]: object }
  render: (id: string, data: object) => JSX.Element
}

export const OptionsGrid = ({ dataset, render }: OptionsGridProps) => (
  <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
    {Object.keys(dataset).map(id => {
      return (
        <Grid item key={id}>
          {render(id, dataset[id])}
        </Grid>
      )
    })}
  </Grid>
)
