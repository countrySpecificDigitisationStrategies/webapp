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
  const [retypePassword, setRetypePassword] = useState(false)
  const [passwordField, setPasswordField] = useState(false)
  const [emailField, setEmailField] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState('Password should have at least 8 characters')
  const [retypePasswordHelperText, setRetypePasswordHelperText] = useState('Repeat password')
  const [emailHelperText, setEmailHelperText] = useState('')

  const [termsAndPolicies, setTermsAndPolicies] = useState({ checkedA: true })

  const handleChange = name => event => {
    setTermsAndPolicies({ ...termsAndPolicies, [name]: event.target.checked })
  }

  if (success) {
    return <Notification type={NotificationType.success} message="Success!" />
  }

  const handleSubmit = (values: RegistrationFormValues): void => {
    if (retypePassword && values.password.length >= 8) {
      dispatch(register(values))
    }
    if (values.password.length >= 8 && !retypePassword) {
      setRetypePassword(true)
      setRetypePasswordHelperText('Passwords muss match!')
    } else {
      setRetypePassword(false)
      setRetypePasswordHelperText('')
    }
    if (values.password.length < 8) {
      setPasswordField(true)
      setPasswordHelperText('Your password has less than 8 characters')
    } else {
      setPasswordField(false)
      setPasswordHelperText('')
    }
    if (!values.email.includes('@')) {
      setEmailField(true)
      setEmailHelperText('Please use a valid email address')
    } else {
      setEmailField(false)
      setEmailHelperText('')
    }
  }

  return (
    <Form<RegistrationFormValues> onSubmit={handleSubmit} submitButtonText="Sign up">
      <TextField label="First name" name="firstName" />
      <TextField label="Last name" name="lastName" />
      <TextField label="E-Mail" type="email" name="email" helperText={emailHelperText} error={emailField} />
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
        error={retypePassword}
      />
      <FormControlLabel
        control={
          <Checkbox
            value="checkedA"
            checked={termsAndPolicies.checkedA}
            onChange={handleChange('checkedA')}
            name="termsAndPolicies"
          />
        }
        label="I agree to terms of service and privacy policy."
      />

      <TextField
        helperText={'Please agree to terms of service and privacy policy'}
        error={!termsAndPolicies.checkedA}
        style={{ marginTop: '-33px' }}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </Form>
  )
}

export default RegistrationForm
