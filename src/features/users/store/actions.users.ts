import { User } from './types'
import { UserResponse } from './types.api'

export const USERS_ADD = 'users/add'

interface AddUsers {
  type: typeof USERS_ADD
  payload: User[]
}

export type UserActions = AddUsers

export const addUsers = (users: User[]): AddUsers => ({
  type: USERS_ADD,
  payload: users,
})

export const addUsersFromResponse = (users: UserResponse[]) => addUsers(transformResponseData(users))
const transformResponseData = (users: UserResponse[]): User[] =>
  users.map(({ id, updated, created, email, firstname, lastname, country, currentCountry }) => ({
    id,
    email,
    country,
    currentCountry,
    firstName: firstname,
    lastName: lastname,
    updated: new Date(updated),
    created: new Date(created),
  }))
