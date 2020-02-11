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
  accountEdit: '/account/edit',

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
  strategyThread: '/discussions/:strategyId/strategy-threads/:threadId',
  buildingBlockThread: '/discussions/:strategyId/building-block-threads/:threadId',
  situationCategoryThread: '/discussions/:strategyId/situation-category-threads/:threadId',
  situationThread: '/discussions/:strategyId/situation-threads/:threadId',
  strategyMeasureThread: '/discussions/:strategyId/strategy-measure-threads/:threadId',
}
