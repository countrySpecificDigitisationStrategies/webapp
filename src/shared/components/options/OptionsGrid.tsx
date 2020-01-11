import React from 'react'
import { Grid } from '@material-ui/core'

export interface OptionsGridProps<T> {
  dataset: { [id in string | number]: T }
  render: (id: string | number, data: T) => JSX.Element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter?: (x: any) => any //TODO: add filter functionality
}

export const OptionsGrid = <T extends object = {}>({ dataset, render }: OptionsGridProps<T>) => (
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
