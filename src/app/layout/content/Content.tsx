import React from 'react'
import { renderRoutes } from 'react-router-config'

import { routes } from 'app/routes/config'
import Breadcrumbs from 'app/layout/content/Breadcrumbs'
import { withNotification, withLoadingOverlay } from 'shared/hocs'

const Content = (): JSX.Element => (
  <>
    <Breadcrumbs />
    {renderRoutes(routes)}
  </>
)

export default withLoadingOverlay(withNotification(Content))
