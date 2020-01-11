import React from 'react'
import { TextField } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { login, isLoggedIn } from '../store'
import { Form, InputValues, Notification, NotificationType } from 'shared/components'

interface LoginFormValues extends InputValues {
  email: string
  password: string
}

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(isLoggedIn)

  if (success) {
    return <Notification type={NotificationType.success} message="Success!" />
  }

  const handleSubmit = (values: LoginFormValues): void => {
    dispatch(login(values))
  }

  return (
    <Form<LoginFormValues> onSubmit={handleSubmit} submitButtonText="Login">
      <TextField label="E-Mail" type="email" name="email" />
      <TextField label="Password" type="password" autoComplete="current-password" name="password" />
    </Form>
  )
}

export default LoginForm
