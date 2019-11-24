import React from 'react'
import { useSelector } from 'react-redux'
import { useStrategyData } from './hooks'
import { getData, getError, StrategiesState } from '../store'
import { CircularProgress, Grid } from '@material-ui/core'
import StrategyCard from 'features/strategies/components/StrategyCard'

const StrategyGrid = (): JSX.Element => {
  useStrategyData()
  const error: StrategiesState.error = useSelector(getError)
  const strategies: StrategiesState.data = useSelector(getData)

  if (!error && !strategies) return <CircularProgress />
  if (error) return <div>{error.detail}</div>
  if (!strategies) return <div>No Strategies could be found.</div>

  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
      {Object.keys(strategies).map(id => {
        return (
          <Grid item key={id}>
            <StrategyCard strategy={strategies[id]} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default StrategyGrid
