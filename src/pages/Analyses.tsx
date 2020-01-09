import React from 'react'
import { AnalysesGrid } from 'features/analyses'
import StandardView from 'shared/components/standard-view/StandardView'

const Analyses = () => {
  const renderAnalysesGrid = () => <AnalysesGrid />
  return (
    <StandardView
      title="Analyses"
      description={"Heres some fresh analyses y'all"}
      nextLevel={{
        title: 'Analyses',
        render: renderAnalysesGrid,
      }}
    />
  )
}

export default Analyses
