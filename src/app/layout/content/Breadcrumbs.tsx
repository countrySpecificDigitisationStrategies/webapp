import React from 'react'
import { NavLink } from 'react-router-dom'
import withBreadcrumbs, { BreadcrumbsRoute, InjectedProps } from 'react-router-breadcrumbs-hoc'
import { Link as MuiLink, Breadcrumbs as MuiBreadcrumbs } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'

import { routes } from 'app/routes/config'

const Breadcrumbs = ({ breadcrumbs }: InjectedProps<unknown>) => (
  <MuiBreadcrumbs
    separator={<NavigateNext className="breadcrumbs__separator" />}
    className="breadcrumbs"
    aria-label="breadcrumb"
    color={'primary'}>
    {breadcrumbs.map(({ match, breadcrumb }) => (
      <MuiLink className="breadcrumbs__item" key={match.url} component={NavLink} to={match.url} color={'primary'}>
        {breadcrumb}
      </MuiLink>
    ))}
  </MuiBreadcrumbs>
)

export default withBreadcrumbs(routes as BreadcrumbsRoute[])(Breadcrumbs)
