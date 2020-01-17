import React from 'react'
import { EntityTree, NodeType, RenderNodeContentFn } from 'features/strategies'
import { Paper } from '@material-ui/core'
import { MeasureForm } from '..'

export const MeasureSelector = () => {
  const renderMeasureEditView: RenderNodeContentFn = node =>
    node && node.type === NodeType.Measure ? <MeasureForm id={+node.id} /> : null

  return (
    <Paper elevation={0}>
      <EntityTree render={renderMeasureEditView} />
    </Paper>
  )
}
