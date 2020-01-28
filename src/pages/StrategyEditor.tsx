import React from 'react'
import { useParams } from 'react-router'

import { APP_ROUTE_PARAMS } from 'app/routes'
import { StrategyForm, MeasureSelector, DraftReview, useSetInitialStrategyEditorValues } from 'features/strategy-editor'
import { StepperView } from 'shared/components'
import { useSelector } from 'react-redux'
import { getBoard } from 'features/users/store'
import { getStrategyByCountryId } from 'features/strategies/store'
import { useStrategyData } from 'features/strategies/components'
import { useBoardData } from 'features/users/components/hooks'

const StrategyEditor = () => {
  useBoardData()
  useStrategyData()

  const { [APP_ROUTE_PARAMS.boardId]: boardId } = useParams<typeof APP_ROUTE_PARAMS>()
  const board = useSelector(getBoard(+boardId))
  const strategy = useSelector(getStrategyByCountryId(board ? board.country : NaN))

  useSetInitialStrategyEditorValues(strategy ? strategy.id : NaN)

  const renderEditorForm = () => <StrategyForm />
  const renderMeasureSelectView = () => <MeasureSelector />
  const renderReviewStrategyView = () => <DraftReview boardId={+boardId} />

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
