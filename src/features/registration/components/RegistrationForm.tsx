import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import { Endpoint, get } from 'app/service'
import { useDispatch, useSelector } from 'react-redux'
import { isSuccess, register } from '../store'
import { Country } from '../store/types'
import { Checkbox, Fields, Form } from 'shared/components'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Redirect } from 'react-router'
import { APP_ROUTES } from '../../../app/routes'
import { RegistrationRequest } from '../store/actions'

interface RegistrationFormValues extends Fields {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmationPassword: string
  country: number
  termsAndPolicies: boolean
}

const mapFormValuesToRegistrationRequest = (formValues: RegistrationFormValues): RegistrationRequest => {
  return {
    firstname: formValues.firstname,
    lastname: formValues.lastname,
    email: formValues.email,
    password: formValues.password,
    country: formValues.country,
  }
}

const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const success = useSelector(isSuccess)
  const [countries, setCountries] = useState()
  const [selectedCountry, setSelectedCountry] = useState()
  const [termsAndPoliciesError, setTermsAndPoliciesError] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [passwordLength, setPasswordLength] = useState(true)
  const [validEmail, setValidEmail] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = (await get(Endpoint.countries)) as Country[]
      setCountries(response)
    }
    fetchData()
  }, [])

  if (success) {
    return <Redirect to={APP_ROUTES.login} />
  }

  if (!countries) return <></>

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
      values['country'] = selectedCountry
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
      <Autocomplete
        id="country-select"
        onChange={(_event, value) => setSelectedCountry(value.id)}
        options={countries}
        autoHighlight
        getOptionLabel={option => option.name}
        renderInput={params => (
          <TextField
            {...params}
            label="Choose a country"
            name="country"
            variant="outlined"
            fullWidth
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
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

export default RegistrationForm
