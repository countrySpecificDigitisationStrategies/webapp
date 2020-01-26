import React from 'react'
import { NavLink } from 'react-router-dom'
import withBreadcrumbs, { InjectedProps } from 'react-router-breadcrumbs-hoc'
import { Link as MuiLink, Breadcrumbs as MuiBreadcrumbs } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import { routes } from 'app/routes'

const Breadcrumbs = ({ breadcrumbs }: InjectedProps) => (
  <MuiBreadcrumbs
    separator={<NavigateNext className="breadcrumbs__separator" />}
    className="breadcrumbs"
    aria-label="breadcrumb"
    color={'secondary'}>
    {breadcrumbs.map(({ match, breadcrumb }) => (
      <MuiLink className="breadcrumbs__item" key={match.url} component={NavLink} to={match.url}>
        {breadcrumb}
      </MuiLink>
    ))}
  </MuiBreadcrumbs>
)

// Typings of HOC sem to be wrong
// --> BreadcrumbsRoute should extend RouteConfig and make breadcrumbs optional
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default withBreadcrumbs(routes)(Breadcrumbs)
