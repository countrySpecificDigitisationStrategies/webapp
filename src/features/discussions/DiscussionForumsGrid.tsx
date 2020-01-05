import React, { useEffect, useState } from 'react'

import { Endpoint, get } from 'app/service'
import { DiscussionCard } from 'features/discussions'
import { Grid } from '@material-ui/core'
import { Discussions } from 'pages'
import { Strategy } from 'features/strategies'

export const DiscussionForumsGrid = () => {
  const [strategies, setStrategies] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await get(Endpoint.strategies)
      setStrategies(result)
    }
    fetchData()
  }, [])

  if (!strategies) return <div>No discussions found</div>

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
      {strategies.map((strategy: Strategy) => (
        <DiscussionCard key={strategy.id} strategy={strategy} />
      ))}
    </Grid>
  )
}
