import React from 'react'
import { EditorForm, MeasureSelector } from 'features/strategy-editor'
import { StepperView } from 'shared/components'

const StrategyEditor = () => {
  const renderEditorForm = () => <EditorForm />
  const renderMeasureSelectView = () => <MeasureSelector />
  const renderReviewStrategyView = () => <>Review the Strategy</>

  return (
    <StepperView
      steps={[
        {
          label: 'General Information',
          render: renderEditorForm,
        },
        {
          label: 'Select Measures',
          render: renderMeasureSelectView,
        },
        {
          label: 'Review Strategy',
          render: renderReviewStrategyView,
        },
      ]}
    />
  )
}

export default StrategyEditor
