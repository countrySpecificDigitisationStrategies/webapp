const APP_ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  analysis: '/analysis',
  strategies: '/strategies',
  strategy: '/strategies/:strategyId',
  block: '/strategies/:strategyId/block/:blockId',
  situation: '/strategies/:strategyId/block/:blockId/situation/:situationId',
  goal: '/strategies/:strategyId/block/:blockId/situation/:situationId/goal/:goalId',
  measure: '/strategies/:strategyId/block/:blockId/situation/:situationId/goal/:goalId/measure/:measureId',
  education: '/education',
  infrastructure: '/infrastructure',
  management: '/management',
  discussion: '/discussion',
  account: '/account',
}

export default APP_ROUTES
