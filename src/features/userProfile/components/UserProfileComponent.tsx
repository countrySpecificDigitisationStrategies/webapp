import React, { useEffect, useState } from 'react'
import { Endpoint, get } from 'app/service'
import { UserProfile } from '../store/types'
import { TextField, Button } from '@material-ui/core'

const UserProfileComponent = (): JSX.Element => {
  const [profileData, setProfileData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.account)) as UserProfile
      setProfileData(response)
    }
    fetchData()
  }, [])

  if (!profileData) return <div>Profile not found</div>
  return (
    <div className="UserProfileContainer">
      <TextField
        id="filled-read-only-input-firstname"
        label="First Name"
        defaultValue={profileData.firstname != null ? profileData.firstname : ''}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-read-only-input-lastname"
        label="Last name"
        defaultValue={profileData.lastname != null ? profileData.lastname : ''}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-read-only-input-email"
        label="E-mail"
        defaultValue={profileData.email != null ? profileData.email : ''}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-read-only-input-country"
        label="Country"
        defaultValue={profileData.country != null ? profileData.country.name : ''}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-read-only-input-membership"
        label="Member since"
        defaultValue={profileData.created}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <Button color="primary">Edit Profile</Button>
    </div>
  )
}

export default UserProfileComponent