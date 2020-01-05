import React from 'react'
import { AnalysesGrid } from 'features/analyses'
import StandardView from 'shared/components/standard-view/StandardView'

const Analyses = () => {
  const LoremIpsum =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

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
