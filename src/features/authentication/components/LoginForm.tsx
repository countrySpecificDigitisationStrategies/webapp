import React from 'react'
import { TextField, Typography, CircularProgress } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { login, getError, isLoading, isLoggedIn } from '../store'
import { Form, InputValues } from 'shared/components'

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const loading = useSelector(isLoading)
  const error = useSelector(getError)
  const success = useSelector(isLoggedIn)

  if (loading) {
    return <CircularProgress />
  }
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
