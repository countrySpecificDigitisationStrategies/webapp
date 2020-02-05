import { RouteConfig } from 'react-router-config'
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

export const APP_ROUTE_PARAMS: { [key: string]: string } = {
  analysisId: 'analysisId',
  strategyId: 'strategyId',
  blockId: 'blockId',
  categoryId: 'categoryId',
  situationId: 'situationId',
  measureId: 'measureId',
  boardId: 'boardId',
}
const p = APP_ROUTE_PARAMS

export const APP_ROUTES = {
  home: '/',

  /** Account */
  login: '/login',
  register: '/register',
  account: '/account',

  /** Analyses */
  analyses: '/analyses',
  analysis: `/analyses/:${p.analysisId}`,

  /** Strategies */
  strategies: '/strategies',
  strategy: `/strategies/:${p.strategyId}`,
  block: `/strategies/:${p.strategyId}/:${p.blockId}`,
  category: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.categoryId}`,
  situation: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.categoryId}/:${p.situationId}`,
  measure: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.categoryId}/:${p.situationId}/:${p.measureId}`,

  /** Strategy Editor */
  editor: {
    create: `/strategies/add/:${p.boardId}`,
    update: `/strategies/edit/:${p.boardId}`,
  },

  /** Discussions */
  discussions: '/discussions',
  discussion: '/discussions/:strategyId',
  newThread: '/discussions/:strategyId/new-thread',
  thread: '/discussions/:strategyId/threads/:threadId',
}

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
    component: Login,
  },
  {
    path: APP_ROUTES.register,
    component: Register,
  },
  {
    path: APP_ROUTES.account,
    component: AccountInfo,
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
    component: StrategyEditor,
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
    component: ThreadNew,
    // breadcrumb: MeasureBreadcrumb, // TODO
  },
]
