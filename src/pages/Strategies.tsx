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
      description={LoremIpsum}
      nextLevel={{
        title: 'Countries',
        render: renderStrategyGrid,
      }}
    />
  )
}

export default Strategies
