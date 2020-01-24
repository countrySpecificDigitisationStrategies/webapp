import React from 'react'
import { AnalysesGrid } from 'features/analyses'
import { StandardView } from 'shared/components/standard-view/StandardView'

const Analyses = () => {
  const renderAnalysesGrid = () => <AnalysesGrid />
  return (
    <StandardView
      title="Analyses"
      description={
        'A proper analyses of the current situation of IT infrastructure is the first step in trying ti improve it' +
        '\n' +
        'Below you will find facts and links for further reading to a variety of different countries. '
      }
      nextLevel={{
        title: 'Analyses',
        render: renderAnalysesGrid,
      }}
    />
  )
}

export default Analyses
