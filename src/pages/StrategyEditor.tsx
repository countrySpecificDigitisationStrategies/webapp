import React from 'react'
import { EditorForm } from 'features/strategy-editor'
import { StepperView } from 'shared/components'

const renderBlocksTable = () => <>Select Blocks</>
const renderCategoryTable = () => <>Select Category</>
const renderSituationTable = () => <>Select Situation</>
const renderMeasureTable = () => <>Select Measure</>

const StrategyEditor = () => (
  <StepperView
    steps={[
      {
        label: 'General Information',
        render: EditorForm,
      },
      {
        label: 'Select Block',
        render: renderBlocksTable,
      },
      {
        label: 'Select Category',
        render: renderCategoryTable,
      },
      {
        label: 'Select Situation',
        render: renderSituationTable,
      },
      {
        label: 'Select Measure',
        render: renderMeasureTable,
      },
    ]}
  />
)

export default StrategyEditor
