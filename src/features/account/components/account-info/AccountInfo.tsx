import React from 'react'
import { useSelector } from 'react-redux'

import { UserProfile } from 'features/users/components'

import { getAccount } from 'features/account/store'
import { useAccountData } from 'features/account/components'

export const AccountInfo = () => {
  useAccountData()
  const account = useSelector(getAccount)

  return account ? <UserProfile user={account} isMe={true} /> : null
}
