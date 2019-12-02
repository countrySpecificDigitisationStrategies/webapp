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
      <TextField label="Username" name="name" />
      <TextField label="E-Mail" type="email" name="email" />
      <TextField label="Password" type="password" autoComplete="new-password" name="password" />
    </Form>
  )
}

export default RegistrationForm
