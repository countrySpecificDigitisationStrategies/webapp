import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { APP_ROUTES } from 'app/routes'

import { useAccountData } from 'features/account/components'
import { accountUpdateSucceeded, getAccount, patchAccount } from 'features/account/store'

import { AccountForm, AccountFormValues } from './AccountForm'

export const AccountEditForm = () => {
  useAccountData()
  const account = useSelector(getAccount)
  const success = useSelector(accountUpdateSucceeded)
  const dispatch = useDispatch()

  if (success) return <Redirect to={APP_ROUTES.account} />
  if (!account) return null

  const { id, firstName, lastName, email, country } = account

  const handleSubmit = ({ email, country, password, ...values }: AccountFormValues): void => {
    dispatch(
      patchAccount(id, {
        email,
        country,
        firstname: values.firstName,
        lastname: values.lastName,
        ...(password && password.length > 0 && { password }),
      })
    )
  }

  return (
    <AccountForm
      submitButtonText="Update Account Information"
      onSubmit={handleSubmit}
      initialValues={{ firstName, lastName, email, country, termsAndPolicies: true }}
      allowEmptyPasswordFields
    />
  )
}
