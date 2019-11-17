export interface UserCredentials {
  email: string
  password: string
}

export interface UserData extends UserCredentials {
  username: string
}
