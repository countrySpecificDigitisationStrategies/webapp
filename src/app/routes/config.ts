import { RouteConfig } from 'react-router-config'
import { APP_ROUTES } from './constants'

import {
  Analyses,
  Analysis,
  Block,
  Category,
  Home,
  Login,
  Measure,
  Register,
  Situation,
  Strategies,
  Strategy,
  StrategyEditor,
  Discussions,
  Discussion,
  Thread,
  ThreadNew,
  AccountInfo,
  AccountEdit,
} from 'pages'

import {
  StrategyBreadcrumb,
  BlockBreadcrumb,
  CategoryBreadcrumb,
  MeasureBreadcrumb,
  SituationBreadcrumb,
} from 'features/strategies'
import { AnalysisBreadcrumb } from 'features/analyses'
import { DiscussionBreadcrumb } from 'features/discussions/components/DiscussionBreadcrumb'
import { withAuthGuard } from 'features/authentication/hocs'

export const routes: RouteConfig[] = [
  {
    path: APP_ROUTES.home,
    component: Home,
    exact: true,
    breadcrumb: null,
  },

  /** Account */
  {
    path: APP_ROUTES.login,
    component: withAuthGuard(Login, { publicOnly: true }),
  },
  {
    path: APP_ROUTES.register,
    component: withAuthGuard(Register, { publicOnly: true }),
  },
  {
    path: APP_ROUTES.account,
    component: withAuthGuard(AccountInfo),
    exact: true,
  },
  {
    path: APP_ROUTES.accountEdit,
    component: withAuthGuard(AccountEdit),
  },

  /** Analyses */
  {
    path: APP_ROUTES.analyses,
    component: Analyses,
    exact: true,
  },
  {
    path: APP_ROUTES.analysis,
    component: Analysis,
    breadcrumb: AnalysisBreadcrumb,
  },

  /** Strategies */
  {
    path: APP_ROUTES.strategies,
    component: Strategies,
    exact: true,
  },
  {
    path: APP_ROUTES.strategy,
    component: Strategy,
    exact: true,
    breadcrumb: StrategyBreadcrumb,
  },
  {
    path: APP_ROUTES.block,
    component: Block,
    exact: true,
    breadcrumb: BlockBreadcrumb,
  },
  {
    path: APP_ROUTES.category,
    component: Category,
    exact: true,
    breadcrumb: CategoryBreadcrumb,
  },
  {
    path: APP_ROUTES.situation,
    component: Situation,
    exact: true,
    breadcrumb: SituationBreadcrumb,
  },
  {
    path: APP_ROUTES.measure,
    component: Measure,
    exact: true,
    breadcrumb: MeasureBreadcrumb,
  },

  /** Strategy Editor */
  {
    path: Object.values(APP_ROUTES.editor),
    component: withAuthGuard(StrategyEditor),
  },

  /** Discussions */
  {
    path: APP_ROUTES.discussions,
    component: Discussions,
    exact: true,
  },
  {
    path: APP_ROUTES.discussion,
    component: Discussion,
    exact: true,
    breadcrumb: DiscussionBreadcrumb,
  },
  {
    path: APP_ROUTES.thread,
    component: Thread,
    exact: true,
    // breadcrumb: MeasureBreadcrumb, // TODO
  },
  {
    path: APP_ROUTES.newThread,
    exact: true,
    component: withAuthGuard(ThreadNew),
    // breadcrumb: MeasureBreadcrumb, // TODO
  },
]
