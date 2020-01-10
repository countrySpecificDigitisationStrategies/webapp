import { ANALYSES_REQUEST_ID } from 'features/analyses/store/actions'
import { doesRequestExist } from 'features/requests/store'

const slice = 'analyses'

const getAll = <T>(key: string) => <T>(state): T[] | null | undefined => state[slice][key]
const getOne = <T>(getAll: <T>(string) => object, id) => (state): T | null => (getAll(state) ? getAll(state)[id] : null)
const isLoaded = (requestId: string) => (state): boolean => doesRequestExist(requestId)(state)

export const getAnalyses = getAll('analyses')
export const getAnalysis = id => getOne(getAnalyses, id)
export const areAnalysesLoaded = isLoaded(ANALYSES_REQUEST_ID)
