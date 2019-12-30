import { RouteConfig } from 'react-router-config'
import { Block, Goal, Home, Login, Measure, Register, Situation, Strategies, Strategy } from 'pages'
import {
  StrategyBreadcrumb,
  BlockBreadcrumb,
  GoalBreadcrumb,
  MeasureBreadcrumb,
  SituationBreadcrumb,
} from 'features/strategies'

export const APP_ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  analyses: '/analyses',
  analysis: '/analyses/countries/:countryId',
  strategies: '/strategies',
  strategy: '/strategies/:strategyId',
  block: '/strategies/:strategyId/:blockId',
  situation: '/strategies/:strategyId/:blockId/:situationId',
  goal: '/strategies/:strategyId/:blockId/:situationId/:goalId',
  measure: '/strategies/:strategyId/:blockId/:situationId/:goalId/:measureId',
  discussions: '/discussions',
  discussion: '/discussions/countries/:countryId',
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
]
