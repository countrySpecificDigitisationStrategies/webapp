import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { isSuccess, register } from '../store'
import { Form, InputValues, Notification, NotificationType } from 'shared/components'
import { Checkbox, FormControlLabel } from '@material-ui/core'

interface RegistrationFormValues extends InputValues {
  name: string
  email: string
  password: string
}

const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(isSuccess)
  const [areRegistrationFieldsFalse, setAreRegistrationFieldsFalse] = useState(false)
  const [passwordField, setPasswordField] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState('Password should be at least 8 characters long')
  const [retypePasswordHelperText, setRetypePasswordHelperText] = useState('Repeat password')

  if (success) {
    return <Notification type={NotificationType.success} message="Success!" />
  }

  const handleSubmit = (values: RegistrationFormValues): void => {
    if (areRegistrationFieldsFalse && values.password.length >= 8) {
      dispatch(register(values))
    }
    if (!areRegistrationFieldsFalse) {
      setAreRegistrationFieldsFalse(true)
      setRetypePasswordHelperText('Passwords muss match!')
    }
    if (values.password.length < 8) {
      setPasswordField(true)
      setPasswordHelperText('Your password has less than 8 characters')
    }
  }

  return (
    <Form<RegistrationFormValues> onSubmit={handleSubmit} submitButtonText="Sign up">
      <TextField label="Username" name="userName" />
      <TextField label="First name" name="firstName" />
      <TextField label="Last name" name="lastName" />
      <TextField label="E-Mail" type="email" name="email" />
      {/* INSERT COUNTRY SELECTION HERE
      <TextField select label="Please select a country of origin"  name="country" />*/}
      <TextField
        label="Password"
        type="password"
        autoComplete="new-password"
        name="password"
        error={passwordField}
        helperText={passwordHelperText}
      />
      <TextField
        label="Retype Password"
        type="password"
        name="passwordRepeat"
        helperText={retypePasswordHelperText}
        error={areRegistrationFieldsFalse}
      />
      <FormControlLabel
        control={<Checkbox value="checkedA" name="termsAndPolicies" />}
        label="I agree to terms of service and privacy policy."
      />
    </Form>
  )
}

export default RegistrationForm
