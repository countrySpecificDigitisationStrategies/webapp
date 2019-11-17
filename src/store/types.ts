export interface UserCredentials {
  email: string
  password: string
}

export interface UserData extends UserCredentials {
  username: string
}

export type AuthToken = string
