import React from 'react'
import { EntityTree } from 'features/strategies'
import { Button, Paper } from '@material-ui/core'

export const MeasureSelector = () => {
  return (
    <Paper elevation={0}>
      <EntityTree render={() => <Button>Select this Measure</Button>} />
    </Paper>
  )
}
