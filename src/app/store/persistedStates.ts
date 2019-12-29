import { DeepPartial } from 'redux'

import { ApplicationState } from 'app/store/reducers'
import loadCountry from 'features/countrySelection/store/loadPersistedState'

const loadPersistedStates = (): DeepPartial<ApplicationState> => {
  return {
    ...loadCountry(),
  }
}

export default loadPersistedStates
