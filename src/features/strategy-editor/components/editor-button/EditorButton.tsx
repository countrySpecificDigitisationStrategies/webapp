import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Fab, Tooltip } from '@material-ui/core'
import { Add, Edit } from '@material-ui/icons'

import { APP_ROUTE_PARAMS, APP_ROUTES } from 'app/routes'
import { getStrategyByCountryId, useStrategyData } from 'features/strategies'

export const EditorButton = (): JSX.Element => {
  //TODO: get current user's country
  const countryId = 34 // Senegal

  useStrategyData()
  const strategy = useSelector(getStrategyByCountryId(countryId))

  const createRoute = APP_ROUTES.editor.create
  const editRoute = APP_ROUTES.editor.update.replace(`:${APP_ROUTE_PARAMS.strategyId}`, String(strategy?.id))

  return (
    <Tooltip title={strategy ? 'Edit Strategy of your country' : 'Add Strategy for your country'}>
      <Fab color="primary" component={Link} to={strategy ? editRoute : createRoute}>
        {strategy ? <Edit /> : <Add />}
      </Fab>
    </Tooltip>
  )
}
