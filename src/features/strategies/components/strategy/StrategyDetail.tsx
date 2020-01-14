import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Typography } from '@material-ui/core'
import { getStrategy, Strategy } from 'features/strategies/store'
import { BlockGrid, useStrategyData } from 'features/strategies/components'
import { StandardView } from 'shared/components'

interface StrategyDetailProps {
  id: Strategy['id']
}

const StrategyDetail = ({ id }: StrategyDetailProps) => {
  useStrategyData()
  const strategy = useSelector(getStrategy(id))
  if (!strategy) return <div>Could not find Strategy with id {id}</div>

  const analysisFragment = (
    <>
      <Typography variant="h5" className="strategy-detail__subheading">
        Analysis
      </Typography>
      <Button color="primary" variant="contained">
        Show complete analysis
      </Button>
    </>
  )

  const renderBlockGrid = () => <BlockGrid ids={strategy.blocks} />
  return (
    <StandardView
      title={strategy.country.name}
      description={strategy.description}
      renderAdditionalInfo={() => analysisFragment}
      nextLevel={{
        title: 'Building Blocks',
        render: renderBlockGrid,
      }}
    />
  )
}

export default StrategyDetail
