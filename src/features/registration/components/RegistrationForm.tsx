import React from 'react'
import { CircularProgress, TextField, Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { getError, isLoading, isSuccess, register } from '../store'
import { Form, InputValues } from 'shared/components'

const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const loading = useSelector(isLoading)
  const error = useSelector(getError)
  const success = useSelector(isSuccess)

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
    dispatch(register(values))
  }

  return (
    <Form onSubmit={handleSubmit} submitButtonText="Sign up">
      <TextField label="Username" name="name" />
      <TextField label="E-Mail" type="email" name="email" />
      <TextField label="Password" type="password" autoComplete="new-password" name="password" />
    </Form>
  )
}

export default RegistrationForm
