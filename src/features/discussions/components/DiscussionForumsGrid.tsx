import React, { useEffect, useState } from 'react'

import { Endpoint, get } from 'app/service'
import { DiscussionCard } from 'features/discussions/components'
import { Grid } from '@material-ui/core'
import { mapResponseToStrategies, StrategyModel, StrategyResponse } from '../models/strategy.discussion.model'

export const DiscussionForumsGrid = () => {
  const [strategies, setStrategies] = useState<StrategyModel[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.strategies)) as StrategyResponse[]
      setStrategies(mapResponseToStrategies(response).filter(strategy => strategy.isPublished))
    }
    fetchData()
  }, [])

  if (!strategies) return <div>No discussions found.</div>
  if (strategies.length == 0) return <div>No strategies published.</div>

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
      {strategies.map((strategy: StrategyModel) => (
        <DiscussionCard key={strategy.id} strategy={strategy} />
      ))}
    </Grid>
  )
}
