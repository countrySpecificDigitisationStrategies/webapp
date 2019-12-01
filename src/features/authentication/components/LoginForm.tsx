import React from 'react'
import { TextField, Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { login, getError, isLoggedIn } from '../store'
import { Form, InputValues } from 'shared/components'

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const error = useSelector(getError)
  const success = useSelector(isLoggedIn)

  if (error) {
    return (
      <div>
        <Typography>ERROR:</Typography>
        <Typography>{error.detail}</Typography>
      </div>
    )
  }
  if (success) {
    return (
      <div>
        <Typography>SUCCESS!</Typography>
      </div>
    )
  }

  const handleSubmit = (values: InputValues): void => {
    dispatch(login(values))
  }

  return (
    <Form onSubmit={handleSubmit} submitButtonText="Login">
      <TextField label="E-Mail" type="email" name="email" />
      <TextField label="Password" type="password" autoComplete="current-password" name="password" />
    </Form>
  )
}

export default LoginForm
