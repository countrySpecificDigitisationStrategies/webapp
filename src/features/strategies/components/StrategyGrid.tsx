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
    <Grid container direction="row" justify="center" alignItems="flex-start">
      {Object.keys(strategies).map(id => {
        return <StrategyCard key={id} strategy={strategies[id]} />
      })}
    </Grid>
  )
}

export default StrategyGrid
