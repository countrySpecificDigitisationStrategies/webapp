import React from 'react'

import APP_ROUTES from 'app/routes'
import { Route } from 'react-router-dom'

import { Home, Login, Register, Strategies, Strategy } from 'pages'
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
  </>
)

export default withLoadingOverlay(withErrorNotification(Content))
