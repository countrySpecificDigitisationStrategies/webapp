import React from 'react'
import { StrategyGrid } from 'features/strategies'
import { StandardView } from 'shared/components'

const Strategies = () => {
  const LoremIpsum =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

  const renderStrategyGrid = () => <StrategyGrid />
  return (
    <StandardView
      title="Strategies"
      description={
        'Strategies consist of concrete measures to improve the state of IT in a country. They are categorized by major building blocks like education, infrastructure or management. Each building block has a number of items that describe the probable current situation in a given country, as well as the goals for improvement resulting from that situation.' +
        '\n' +
        'Below you will find the strategies of individual countries, as well as a catalogue of all existing measures. '
      }
      nextLevel={{
        title: 'Countries',
        render: renderStrategyGrid,
      }}
    />
  )
}

export default Strategies
