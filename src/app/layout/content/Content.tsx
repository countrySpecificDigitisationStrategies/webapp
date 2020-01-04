import React from 'react'
import { renderRoutes } from 'react-router-config'

import { routes } from 'app/routes'
import Breadcrumbs from 'app/layout/content/Breadcrumbs'
import { withErrorNotification, withLoadingOverlay } from 'shared/hocs'

const Content = (): JSX.Element => (
  <>
    <Breadcrumbs />
    {renderRoutes(routes)}
  </>
)

export default withLoadingOverlay(withErrorNotification(Content))
