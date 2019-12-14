import React from 'react'
import { TextField } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { isSuccess, register } from '../store'
import { Form, InputValues, Notification, NotificationType } from 'shared/components'

const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(isSuccess)

  if (success) {
    return <Notification type={NotificationType.success} message="Success!" />
  }

  const handleSubmit = (values: InputValues): void => {
    dispatch(register(values))
  }

  return (
    <Form onSubmit={handleSubmit} submitButtonText="Sign up">
      <TextField label="First name" name="firstname" />
      <TextField label="Last name" name="lastName" />
      <TextField label="E-Mail" type="email" name="email" />
      <TextField
        label="Password"
        type="password"
        autoComplete="new-password"
        name="password"
        helperText="It should be at least 8 characters long"
      />
      <TextField label="Retype Password" type="password" name="password-repeat" helperText="Repeat password" />
    </Form>
  )
}

export default RegistrationForm
