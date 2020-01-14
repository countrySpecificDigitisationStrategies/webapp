import React from 'react'
import { Grid } from '@material-ui/core'

export interface OptionsGridProps<T> {
  dataset: { [id in string | number]: T }
  render: (id: string | number, data: T) => JSX.Element
  filter?: (item: T) => boolean
}

export const OptionsGrid = <T extends object = {}>({ dataset, render, filter = () => true }: OptionsGridProps<T>) => (
  <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
    {Object.keys(dataset).map(id => {
      const item = dataset[id]
      return filter(item) ? (
        <Grid item key={id}>
          {render(id, item)}
        </Grid>
      ) : null
    })}
  </Grid>
)
