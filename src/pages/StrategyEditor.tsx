import React from 'react'
import { useParams } from 'react-router'

import { APP_ROUTE_PARAMS } from 'app/routes'
import { StrategyForm, MeasureSelector, DraftReview, useSetInitialStrategyEditorValues } from 'features/strategy-editor'
import { StepperView } from 'shared/components'

const StrategyEditor = () => {
  const { [APP_ROUTE_PARAMS.strategyId]: strategyId } = useParams<typeof APP_ROUTE_PARAMS>()
  useSetInitialStrategyEditorValues(+strategyId)

  const renderEditorForm = () => <StrategyForm />
  const renderMeasureSelectView = () => <MeasureSelector />
  const renderReviewStrategyView = () => <DraftReview />

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
