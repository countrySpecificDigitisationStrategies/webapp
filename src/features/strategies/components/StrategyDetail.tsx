import React from 'react'
import { getData, getError, StrategiesState, Strategy } from 'features/strategies/store'
import { Button, CircularProgress, Typography } from '@material-ui/core'
import { useStrategyData } from 'features/strategies/components/hooks'
import { useSelector } from 'react-redux'

interface StrategyDetailProps {
  id: Strategy.id
}

const StrategyDetail = ({ id }: StrategyDetailProps) => {
  useStrategyData()
  const error: StrategiesState.error = useSelector(getError)
  const strategies: StrategiesState.data = useSelector(getData)
  const strategy: Strategy | null = strategies ? strategies[id] : null

  if (!error && !strategies) return <CircularProgress />
  if (error) return <div>{error.detail}</div>
  if (!strategy) return <div>Could not find Strategy with id {id}</div>

  return (
    <div className="strategy-detail">
      <Typography variant="overline" className="strategy-detail__preheading">
        Strategy: Afghanistan
      </Typography>
      <Typography variant="h3" className="strategy-detail__heading">
        {strategy.title}
      </Typography>
      <Typography variant="h5" className="strategy-detail__subheading">
        Analysis
      </Typography>
      <Typography variant="body1" className="strategy-detail__description">
        {strategy.description}
      </Typography>
      <Button color="primary" variant="contained">
        Show complete analysis
      </Button>
    </div>
  )
}

export default StrategyDetail
