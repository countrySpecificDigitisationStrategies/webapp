import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { TextField } from '@material-ui/core'

import { Form, Fields } from 'shared/components'

import { login, isLoggedIn } from 'features/account/store'

interface LoginFormValues extends Fields {
  email: string
  password: string
}

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(isLoggedIn)
  const history = useHistory()

  if (success) {
    history.goBack()
  }

  const handleSubmit = (values: LoginFormValues): void => {
    dispatch(login(values))
  }

  return (
    <div className="login-form">
      <Form<LoginFormValues> onSubmit={handleSubmit} submitButtonText="Login">
        <TextField label="E-Mail" type="email" name="email" />
        <TextField label="Password" type="password" autoComplete="current-password" name="password" />
      </Form>
    </div>
  )
}

export default LoginForm
