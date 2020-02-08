import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

import { Account } from './types'
import { AccountResponse } from './types.api'
import { addBoardsFromResponse } from './actions.boards'
import { addCountriesFromResponse } from 'features/countries'

export const ACCOUNT_REQUEST_ID = 'account'
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
  country: country.id,
  created: new Date(created),
  updated: new Date(updated),
})

export const loadAccount = () =>
  createRequest<AccountResponse>({
    id: ACCOUNT_REQUEST_ID,
    request: () => get(Endpoint.account),
    onSuccess: [
      setAccountFromResponse,
      ({ boards }) => addBoardsFromResponse(boards),
      ({ country }) => addCountriesFromResponse([country]),
    ],
  })
