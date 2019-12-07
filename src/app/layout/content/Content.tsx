import React from 'react'

import APP_ROUTES from 'app/routes'
import { Route } from 'react-router-dom'

import { Block, Goal, Home, Login, Measure, Register, Situation, Strategies, Strategy } from 'pages'
import { withErrorNotification, withLoadingOverlay } from 'shared/hocs'
import { Breadcrumb } from 'shared/components/breadcrumb/Breadcrumb'

const Content = (): JSXElement => (
  <>
    <Route path="/:path" component={Breadcrumb} />
    <Route exact path={APP_ROUTES.home} component={Home} />
    <Route exact path={APP_ROUTES.login} component={Login} />
    <Route exact path={APP_ROUTES.register} component={Register} />
    <Route exact path={APP_ROUTES.strategies} component={Strategies} />
    <Route exact path={APP_ROUTES.strategy} component={Strategy} />
    <Route exact path={APP_ROUTES.block} component={Block} />
    <Route exact path={APP_ROUTES.situation} component={Situation} />
    <Route exact path={APP_ROUTES.goal} component={Goal} />
    <Route exact path={APP_ROUTES.measure} component={Measure} />
  </>
)

export default withLoadingOverlay(withErrorNotification(Content))
