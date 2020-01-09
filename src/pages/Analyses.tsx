import React from 'react'
import { AnalysesGrid } from 'features/analyses'
import StandardView from 'shared/components/standard-view/StandardView'

const Analyses = () => {
  const renderAnalysesGrid = () => <AnalysesGrid />
  return (
    <StandardView
      title="Analyses"
      description={LoremIpsum}
      nextLevel={{
        title: 'Analyses',
        render: renderAnalysesGrid,
      }}
    />
  )
}

export default Analyses
