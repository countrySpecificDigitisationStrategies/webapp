import { RouteConfig } from 'react-router-config'
import { Block, Goal, Home, Login, Measure, Register, Situation, Strategies, Strategy, Analysis } from 'pages'
import {
  StrategyBreadcrumb,
  BlockBreadcrumb,
  GoalBreadcrumb,
  MeasureBreadcrumb,
  SituationBreadcrumb,
  AnalysisBreadcrumb,
} from 'features/strategies'

export const APP_ROUTE_PARAMS: { [key: string]: string } = {
  strategyId: 'strategyId',
  blockId: 'blockId',
  situationId: 'situationId',
  goalId: 'goalId',
  measureId: 'measureId',
}
const p = APP_ROUTE_PARAMS

export const APP_ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  analysis: '/analysis',
  strategies: '/strategies',
  strategy: `/strategies/:${p.strategyId}`,
  block: `/strategies/:${p.strategyId}/:${p.blockId}`,
  situation: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.situationId}`,
  goal: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.situationId}/:${p.goalId}`,
  measure: `/strategies/:${p.strategyId}/:${p.blockId}/:${p.situationId}/:${p.goalId}/:${p.measureId}`,
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
    path: APP_ROUTES.situation,
    component: Situation,
    exact: true,
    breadcrumb: SituationBreadcrumb,
  },
  {
    path: APP_ROUTES.goal,
    component: Goal,
    exact: true,
    breadcrumb: GoalBreadcrumb,
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
]
