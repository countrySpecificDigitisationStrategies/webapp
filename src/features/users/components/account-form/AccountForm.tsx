import React, { useState } from 'react'
import { TextField, Typography } from '@material-ui/core'

import { Checkbox, Fields, Form } from 'shared/components'
import { CountryCombobox } from 'features/countries'

interface AccountFormProps {
  submitButtonText: string
  onSubmit: (values: AccountFormValues) => void
  initialValues?: { [inputName in keyof AccountFormValues]?: AccountFormValues[inputName] }
  allowEmptyPasswordFields?: boolean
}

export interface AccountFormValues extends Fields {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  country: number
  termsAndPolicies: boolean
}

interface ValidationRules {
  termsAndPolicies: boolean
  passwordsMatch: boolean
  passwordLength: boolean
  validEmail: boolean
}

const emptyOrUndefined = (value: string | undefined) => value === undefined || value.length < 1

export const AccountForm = ({
  submitButtonText,
  onSubmit,
  initialValues = {},
  allowEmptyPasswordFields = false,
}: AccountFormProps): JSX.Element => {
  const [validation, setValidation] = useState<ValidationRules>({
    termsAndPolicies: true,
    passwordsMatch: true,
    passwordLength: true,
    validEmail: true,
  })

  const validate = ({
    termsAndPolicies,
    password,
    passwordConfirmation,
    email,
  }: AccountFormValues): ValidationRules => ({
    termsAndPolicies: termsAndPolicies,
    passwordsMatch:
      password === passwordConfirmation ||
      (allowEmptyPasswordFields && emptyOrUndefined(password) && emptyOrUndefined(passwordConfirmation)),
    passwordLength: (allowEmptyPasswordFields && (!password || password.length === 0)) || password?.length >= 8,
    validEmail: email ? email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/) !== null : false,
  })

  const getValidValues = (values: AccountFormValues) =>
    Object.entries(validate(values)).reduce(
      (acc, [name, value]) => ({
        ...acc,
        ...(value && { [name]: value }),
      }),
      {}
    )

  const handleChange = (values: AccountFormValues): void => {
    const validValues = getValidValues(values)
    setValidation({
      ...validation,
      ...validValues,
    })
  }

  const handleSubmit = (values: AccountFormValues): void => {
    const validation = validate(values)
    if (!Object.values(validation).some(i => !i)) {
      onSubmit(values)
    } else {
      setValidation(validation)
    }
  }

  return (
    <Form<AccountFormValues>
      onSubmit={handleSubmit}
      onChange={handleChange}
      initialValues={initialValues}
      submitButtonText={submitButtonText}>
      <Typography variant={'overline'}>Personal Information</Typography>

      <TextField label="First name" name="firstName" />
      <TextField label="Last name" name="lastName" />

      <CountryCombobox />

      <br />
      <br />

      <Typography variant={'overline'}>Account Information</Typography>

      <TextField
        label="E-Mail"
        type="email"
        name="email"
        autoComplete="username"
        error={!validation.validEmail}
        helperText={validation.validEmail ? '' : 'Please use a valid email address'}
      />

      {allowEmptyPasswordFields ? (
        <>
          <br />
          <Typography variant={'caption'}>Leave password fields empty to not change your current password</Typography>
        </>
      ) : (
        <></>
      )}

      <TextField
        label="Password"
        type="password"
        name="password"
        autoComplete="new-password"
        error={!validation.passwordLength}
        helperText={validation.passwordLength ? '' : 'Password should have at least 8 characters'}
      />

      <TextField
        label="Confirm Password"
        type="password"
        name="passwordConfirmation"
        autoComplete="new-password"
        error={!validation.passwordsMatch}
        helperText={validation.passwordsMatch ? '' : 'Passwords do not match'}
      />

      <br />

      <Checkbox
        label="I agree to terms of service and privacy policy."
        name="termsAndPolicies"
        error={!validation.termsAndPolicies}
        {...(!validation.termsAndPolicies && { helperText: 'Please agree to terms of service and privacy policy' })}
      />
    </Form>
  )
}
