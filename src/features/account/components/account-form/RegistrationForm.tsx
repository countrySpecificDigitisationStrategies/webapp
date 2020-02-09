import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { APP_ROUTES } from 'app/routes'

import { register, registrationSucceeded } from 'features/account/store'
import { AccountForm, AccountFormValues } from './AccountForm'

export const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(registrationSucceeded)

  if (success) {
    return <Redirect to={APP_ROUTES.login} />
  }

  const handleSubmit = (values: AccountFormValues): void => {
    dispatch(
      register({
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        password: values.password,
        country: values.country,
      })
    )
  }

  return <AccountForm submitButtonText="Sign up" onSubmit={handleSubmit} />
}
