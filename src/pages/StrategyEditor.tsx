import React from 'react'
import { EditorForm } from 'features/strategy-editor'
import { StepperView, TableView } from 'shared/components'
import { NavigateNext } from '@material-ui/icons'

const getColumnConfig = (childsName: string) => ({ title: 'Title', numberOfChildren: `# Of ${childsName}`, next: '' })

const getMockData = (entityName: string) =>
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({
    title: `${entityName} ${letter}`,
    numberOfChildren: '' + Math.ceil(Math.random() * 100),
  }))

const getActionConfig = () => [
  { label: () => 'Show', onClick: () => console.log('show') },
  { icon: NavigateNext, onClick: () => console.log('next') },
]

const getTableView = (entityName: string, childName: string) => (
  <TableView columns={getColumnConfig(childName)} data={getMockData(entityName)} actions={getActionConfig()} />
)

const renderBlocksTable = () => getTableView('Block', 'Categories')
const renderCategoryTable = () => getTableView('Category', 'Situations')
const renderSituationTable = () => getTableView('Situation', 'Measures')
const renderMeasureTable = () => getTableView('Measure', 'Fooo')

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
