import React, { useState } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'

import { connect } from 'react-redux'
import { UserData } from '../store/account/types'
import { registrationRequest } from '../store/account/actions'

type RegistrationFormProps = {
  loading: boolean
  error: object
  success: object
  requestRegistration: (UserData) => void
}

const RegistrationForm = ({ loading, error, success, requestRegistration }: RegistrationFormProps): JSX.Element => {
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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (setNewValueFn: Function, e: Event): void => {
    setNewValueFn(e.target.value)
  }

  const handleSubmit = (e: Event): void => {
    e.preventDefault()
    console.log('submit', name, email, password)
    requestRegistration({
      name,
      email,
      password,
    })
  }

  return (
    <div className="form__container">
      <form>
        <TextField label="Username" value={name} onChange={handleChange.bind(this, setName)} />
        <TextField label="E-Mail" type="email" value={email} onChange={handleChange.bind(this, setEmail)} />
        <TextField
          label="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={handleChange.bind(this, setPassword)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: object): StoreDisplayProps => ({
  loading: state.accountReducer.isLoading,
  error: state.accountReducer.error,
  success: state.accountReducer.isSuccess,
})

const mapDispatchToProps = (dispatch): StoreDisplayProps => {
  return {
    requestRegistration: (userData: UserData): void => {
      dispatch(registrationRequest(userData))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)
