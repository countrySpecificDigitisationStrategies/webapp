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
  UserProfile,
} from 'pages'
import {
  StrategyBreadcrumb,
  BlockBreadcrumb,
  CategoryBreadcrumb,
  MeasureBreadcrumb,
  SituationBreadcrumb,
} from 'features/strategies'
import { AnalysisBreadcrumb } from 'features/analyses'

export const APP_ROUTE_PARAMS: { [key: string]: string } = {
  strategyId: 'strategyId',
  blockId: 'blockId',
  categoryId: 'categoryId',
  situationId: 'situationId',
  measureId: 'measureId',
}
const p = APP_ROUTE_PARAMS

export const APP_ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  analyses: '/analyses',
  analysis: '/analyses/:analysesId',
  strategies: '/strategies',
  strategy: `/strategies/:${p.strategyId}`,
  block: `/strategies/:${p.strategyId}/:${p.blockId}`,
  category: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.categoryId}`,
  situation: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.categoryId}/:${p.situationId}`,
  measure: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.categoryId}/:${p.situationId}/:${p.measureId}`,
  education: '/education',
  infrastructure: '/infrastructure',
  management: '/management',
  discussion: '/discussion',
  account: '/account',
}

export const routes: RouteConfig[] = [
  {
    path: APP_ROUTES.home,
    component: Home,
    exact: true,
    breadcrumb: null,
  },
  {
    path: APP_ROUTES.login,
    component: Login,
  },
  {
    path: APP_ROUTES.register,
    component: Register,
  },
  {
    path: APP_ROUTES.strategies,
    component: Strategies,
    exact: true,
  },
  {
    path: APP_ROUTES.analyses,
    component: Analyses,
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
  {
    path: APP_ROUTES.analysis,
    component: Analysis,
    exact: true,
    breadcrumb: AnalysisBreadcrumb,
  },
  {
    path: APP_ROUTES.account,
    component: UserProfile,
    exact: true,
  },
]
