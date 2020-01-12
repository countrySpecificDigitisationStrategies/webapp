import {
  BLOCKS_REQUEST_ID,
  CATEGORIES_REQUEST_ID,
  MEASURES_REQUEST_ID,
  SITUATIONS_REQUEST_ID,
  STRATEGIES_REQUEST_ID,
} from 'features/strategies/store/actions'
import { doesRequestExist } from 'features/requests/store'

import {
  Strategy,
  Block,
  Category,
  Measure,
  Situation,
  StrategiesState,
  StrategyEntity,
} from 'features/strategies/store/types'
import { ApplicationState } from 'app/store/reducers'

const getStrategiesState = (state: ApplicationState): StrategiesState => state['strategies']

type getAllFn<T extends StrategyEntity> = (state: ApplicationState) => { [key in T['id']]: T } | null
const getAll = <T extends StrategyEntity>(key: keyof StrategiesState): getAllFn<T> => state =>
  // Even though it's technically not valid to have T as the return type, the alternative would be to return
  // StrategyEntity. This makes it harder to achieve the real return type in any calling function and any workaround
  // makes it even more complicated. So it's preferred to ignore this issue instead.
  // See https://github.com/Microsoft/TypeScript/issues/18215 for additional info.
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  getStrategiesState(state)[key]

type getOneFn<T extends StrategyEntity> = (state: ApplicationState) => T | null
const getOne = <T extends StrategyEntity>(getAllFn: getAllFn<T>, id: T['id']): getOneFn<T> => state => {
  const all = getAllFn(state)
  return all ? all[id] : null
}

const isLoaded = (requestId: string) => (state: ApplicationState): boolean => doesRequestExist(requestId)(state)

export const getStrategies = getAll<Strategy>('strategies')
export const getStrategy = (id: Strategy['id']) => getOne<Strategy>(getStrategies, id)
export const areStrategiesLoaded = isLoaded(STRATEGIES_REQUEST_ID)

export const getBlocks = getAll<Block>('blocks')
export const getBlock = (id: Block['id']) => getOne<Block>(getBlocks, id)
export const areBlocksLoaded = isLoaded(BLOCKS_REQUEST_ID)

export const getSituations = getAll<Situation>('situations')
export const getSituation = (id: Situation['id']) => getOne<Situation>(getSituations, id)
export const areSituationsLoaded = isLoaded(SITUATIONS_REQUEST_ID)

export const getCategories = getAll<Category>('categories')
export const getCategory = (id: Category['id']) => getOne<Category>(getCategories, id)
export const areCategoriesLoaded = isLoaded(CATEGORIES_REQUEST_ID)

export const getMeasures = getAll<Measure>('measures')
export const getMeasure = (id: Measure['id']) => getOne<Measure>(getMeasures, id)
export const areMeasuresLoaded = isLoaded(MEASURES_REQUEST_ID)
