import React from 'react'
import { StrategyGrid } from 'features/strategies'
import { Typography } from '@material-ui/core'

const Strategies = () => (
  <div className="strategy-page">
    <Typography variant="h3" className="strategy-page__heading">
      Strategies
    </Typography>
    <Typography variant="body1" className="strategy-page__description">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.
    </Typography>
    <Typography variant="h5" className="strategy-page__subheading">
      Countries
    </Typography>
    <StrategyGrid />
  </div>
)

export default Strategies
