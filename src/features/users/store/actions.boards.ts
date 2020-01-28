import { Endpoint, get } from 'app/service'
import { createRequest } from 'features/requests/store'

import { Board } from './types'
import { BoardResponse } from './types.api'
import { addUsersFromResponse } from 'features/users/store/actions.users'
import { flatten } from 'shared/utils'

export const BOARDS_REQUEST_ID = 'boards'
export const BOARDS_ADD = 'boards/add'

interface AddBoards {
  type: typeof BOARDS_ADD
  payload: Board[]
}

export type BoardActions = AddBoards

export const addBoards = (boards: Board[]): AddBoards => ({
  type: BOARDS_ADD,
  payload: boards,
})

export const addBoardsFromResponse = (boards: BoardResponse[]) => addBoards(transformBoardResponseData(boards))
const transformBoardResponseData = (boards: BoardResponse[]): Board[] =>
  boards.map(({ country, users, created, updated, ...board }) => ({
    ...board,
    country: country.id,
    users: users.map(user => user.id),
    created: new Date(created),
    updated: new Date(updated),
  }))

export const loadBoards = () =>
  createRequest<BoardResponse[]>({
    id: BOARDS_REQUEST_ID,
    request: () => get(Endpoint.boards),
    onSuccess: [addBoardsFromResponse, boards => addUsersFromResponse(flatten(boards.map(board => board.users)))],
  })
