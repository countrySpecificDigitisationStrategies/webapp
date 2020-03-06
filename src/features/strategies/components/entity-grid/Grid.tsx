import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { StrategyEntity } from 'features/strategies/store'
import { EntityCard, EntityCardProps } from './Card'

import { sortByProperty } from 'shared/utils'

interface GridProps<T extends StrategyEntity> {
  dataset: T[]
  filter?: (item: T) => boolean
  sortBy?: keyof T
  emptyMessage?: string
  card: (item: T) => EntityCardProps
}

export const EntityGrid = <T extends StrategyEntity>({
  dataset,
  filter,
  sortBy,
  emptyMessage = "Sorry, there's nothing here yet.",
  card,
}: GridProps<T>) => {
  dataset = filter ? dataset.filter(filter) : dataset
  dataset = sortBy ? sortByProperty(dataset, option => option[sortBy]) : dataset
  if (dataset.length < 1) return <Typography>{emptyMessage}</Typography>

  return (
    <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={2}>
      {dataset.map(item => (
        <Grid item key={item.id}>
          <EntityCard {...card(item)} />
        </Grid>
      ))}
    </Grid>
  )
}
