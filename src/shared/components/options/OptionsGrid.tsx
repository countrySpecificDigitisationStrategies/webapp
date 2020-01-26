import React from 'react'
import { Grid } from '@material-ui/core'
import { sortByProperty } from 'shared/utils'

type Id = string | number

export interface OptionsGridProps<T> {
  dataset: { [id in Id]: T }
  render: (id: Id, data: T) => JSX.Element
  filter?: (item: T) => boolean
  sortBy?: keyof T
}

interface Option<T> {
  id: Id
  item: T
}

export const OptionsGrid = <T extends object = {}>({
  dataset,
  render,
  sortBy,
  filter = () => true,
}: OptionsGridProps<T>) => {
  const options = Object.entries(dataset).reduce<Option<T>[]>((acc, [id, item]) => [...acc, { id, item }], [])

  if (sortBy) {
    sortByProperty<Option<T>>(options, option => option.item[sortBy])
  }

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
      {options.map(option => {
        return filter(option.item) ? (
          <Grid item key={option.id}>
            {render(option.id, option.item)}
          </Grid>
        ) : null
      })}
    </Grid>
  )
}
