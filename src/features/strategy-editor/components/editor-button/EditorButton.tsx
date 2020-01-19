import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fab, Tooltip } from '@material-ui/core'
import { Add, Edit } from '@material-ui/icons'

import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'

export const EditorButton = (): JSX.Element => {
  //TODO: get current user's country and decide if it's add or edit
  const countryId = 34 // Senegal
  const [strategyExists] = useState(Math.random() < 0.5)

  const createRoute = APP_ROUTES.editor.create
  const editRoute = APP_ROUTES.editor.update.replace(`:${APP_ROUTE_PARAMS.strategyId}`, String(countryId))

  return (
    <Tooltip title={strategyExists ? 'Edit Strategy of your country' : 'Add Strategy for your country'}>
      <Fab color="primary" component={Link} to={strategyExists ? editRoute : createRoute}>
        {strategyExists ? <Edit /> : <Add />}
      </Fab>
    </Tooltip>
  )
}
