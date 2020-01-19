import { ANALYSES_REQUEST_ID } from 'features/analyses/store/actions'
import { doesRequestExist } from 'features/requests/store'
import { ApplicationState } from 'app/store/reducers'
import { Analysis, AnalysesState } from 'features/analyses/store/types'

const getAnalysesState = (state: ApplicationState): AnalysesState => state['analyses']

type getAllFn<T extends Analysis> = (state: ApplicationState) => { [key in T['id']]: T } | null
const getAll = <T extends Analysis>(key: keyof AnalysesState): getAllFn<T> => state =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  getAnalysesState(state)[key]

type getOneFn<T extends Analysis> = (state: ApplicationState) => T | null
const getOne = <T extends Analysis>(getAllFn: getAllFn<T>, id: T['id']): getOneFn<T> => state => {
  const all = getAllFn(state)
  return all ? all[id] : null
}

const isLoaded = (requestId: string) => (state: ApplicationState): boolean => doesRequestExist(requestId)(state)

export const getAnalyses = getAll<Analysis>('analyses')
export const getAnalysis = (id: Analysis['id']) => getOne<Analysis>(getAnalyses, id)
export const areAnalysesLoaded = isLoaded(ANALYSES_REQUEST_ID)
