import React from 'react'
import { EntityTree, RenderNodeContentFn } from 'features/strategies'
import { Paper } from '@material-ui/core'
import { MeasureForm } from '..'
import { View } from '../../../discussions/components/discussionDetail'

export const MeasureSelector = () => {
  const renderMeasureEditView: RenderNodeContentFn = selectedView =>
    selectedView && selectedView.contentId && selectedView.view === View.StrategyMeasure ? (
      <MeasureForm id={+selectedView?.contentId} />
    ) : null

  return (
    <Paper elevation={0}>
      <EntityTree render={renderMeasureEditView} />
    </Paper>
  )
}
