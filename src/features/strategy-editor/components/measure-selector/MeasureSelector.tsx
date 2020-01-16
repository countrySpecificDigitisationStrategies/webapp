import React from 'react'
import { EntityTree } from 'features/strategies'
import { Button, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  root: {},
  tree: {
    maxHeight: '60vh',
  },
})

export const MeasureSelector = () => {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.root}>
      <EntityTree className={classes.tree} render={() => <Button>Select this Measure</Button>} />
    </Paper>
  )
}
