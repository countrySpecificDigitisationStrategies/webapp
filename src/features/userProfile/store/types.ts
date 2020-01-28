export interface UserProfileState {
  profile: { [id in UserProfile['id']]: UserProfile } | null
}

export interface UserProfile {
  id: number
  firstName: string
  lastName: string
  email: string
  country: Country
  created: string
}

// This just exists so TS doesn't complain about missing fields on country
export interface Country {
  name: string
  flagRectangle: string
}
