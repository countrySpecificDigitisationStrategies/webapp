import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { TextField } from '@material-ui/core'

import { APP_ROUTES } from 'app/routes'
import { Checkbox, Fields, Form } from 'shared/components'
import { CountryCombobox } from 'features/countries'

import { register, RegistrationRequest, registrationSucceeded } from 'features/users/store'

interface RegistrationFormValues extends Fields {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmationPassword: string
  country: number
  termsAndPolicies: boolean
}

const mapFormValuesToRegistrationRequest = ({
  confirmationPassword,
  termsAndPolicies,
  ...registrationRequestValues
}: RegistrationFormValues): RegistrationRequest => registrationRequestValues

export const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(registrationSucceeded)
  const [termsAndPoliciesError, setTermsAndPoliciesError] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [passwordLength, setPasswordLength] = useState(true)
  const [validEmail, setValidEmail] = useState(true)

  if (success) {
    return <Redirect to={APP_ROUTES.login} />
  }

  const handleChange = (values: RegistrationFormValues): void => {
    if (values.termsAndPolicies) {
      setTermsAndPoliciesError(false)
    }
    if (values.password === values.confirmationPassword) {
      setPasswordMatch(true)
    }
    if (values.password && values.password.length >= 8) {
      setPasswordLength(true)
    }
    if (values.email && values.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/)) {
      setValidEmail(true)
    }
  }

  const handleSubmit = (values: RegistrationFormValues): void => {
    let invalidForm = false
    if (!values.termsAndPolicies) {
      setTermsAndPoliciesError(true)
      invalidForm = true
    }
    if (values.password !== values.confirmationPassword) {
      setPasswordMatch(false)
      invalidForm = true
    }
    if (!values.password || values.password.length < 8) {
      setPasswordLength(false)
      invalidForm = true
    }
    if (!values.email || values.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/) === null) {
      setValidEmail(false)
      invalidForm = true
    }
    if (!invalidForm) {
      dispatch(register(mapFormValuesToRegistrationRequest(values)))
    }
  }

  return (
    <Form<RegistrationFormValues> onSubmit={handleSubmit} onChange={handleChange} submitButtonText="Sign up">
      <TextField label="First name" name="firstname" />
      <TextField label="Last name" name="lastname" />
      <TextField
        label="E-Mail"
        type="email"
        name="email"
        error={!validEmail}
        helperText={validEmail ? '' : 'Please use a valid email address'}
      />
      <CountryCombobox />
      <TextField
        label="Password"
        type="password"
        autoComplete="new-password"
        name="password"
        error={!passwordLength}
        helperText={passwordLength ? '' : 'Password should have at least 8 characters'}
      />

      <TextField
        label="Retype Password"
        type="password"
        name="confirmationPassword"
        error={!passwordMatch}
        helperText={passwordMatch ? '' : 'Passwords must match!'}
      />

      <Checkbox label="I agree to terms of service and privacy policy." name="termsAndPolicies" />

      {termsAndPoliciesError ? (
        <TextField
          helperText={'Please agree to terms of service and privacy policy'}
          error={termsAndPoliciesError}
          style={{ marginTop: '-33px' }}
          InputProps={{
            disableUnderline: true,
          }}
        />
      ) : (
        <></>
      )}
    </Form>
  )
}
