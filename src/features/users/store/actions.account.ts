import { Endpoint, get, patch } from 'app/service'
import { createRequest } from 'features/requests/store'

import { Account } from './types'
import { AccountPatchRequest, AccountResponse } from './types.api'
import { addBoardsFromResponse } from './actions.boards'
import { addCountriesFromResponse } from 'features/countries'

export const ACCOUNT_LOAD_REQUEST_ID = 'account/load'
export const ACCOUNT_UPDATE_REQUEST_ID = 'account/update'
export const ACCOUNT_SET = 'account/set'

interface SetAccount {
  type: typeof ACCOUNT_SET
  payload: Account
}

export type AccountActions = SetAccount

export const setAccount = (account: Account): SetAccount => ({
  type: ACCOUNT_SET,
  payload: account,
})

const setAccountFromResponse = (account: AccountResponse) => setAccount(transformAccountResponseData(account))
const transformAccountResponseData = ({
  firstname,
  lastname,
  boards,
  country,
  created,
  updated,
  ...account
}: AccountResponse): Account => ({
  ...account,
  lastName: lastname,
  firstName: firstname,
  boards: boards.map(board => board.id),
  country: country?.id,
  created: new Date(created),
  updated: new Date(updated),
})

const setAccountActions = [
  setAccountFromResponse,
  ({ boards }: AccountResponse) => addBoardsFromResponse(boards),
  ({ country }: AccountResponse) => addCountriesFromResponse(country ? [country] : []),
]

export const loadAccount = () =>
  createRequest<AccountResponse>({
    id: ACCOUNT_LOAD_REQUEST_ID,
    request: () => get(Endpoint.account),
    onSuccess: setAccountActions,
  })

export const patchAccount = (id: Account['id'], payload: AccountPatchRequest) =>
  createRequest<AccountResponse>({
    id: ACCOUNT_UPDATE_REQUEST_ID,
    request: () => patch(Endpoint.users, id, payload),
    onSuccess: setAccountActions,
    clearAfter: true,
  })
