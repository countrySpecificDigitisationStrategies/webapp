import React, { useState } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'

import { connect } from 'react-redux'
import { UserCredentials, UserData } from '../store/types'
import { loginRequest } from '../store/authentication/actions'

type LoginFormProps = {
  loading: boolean
  error: object
  success: UserData
  requestRegistration: (UserData) => void
}

const LoginForm = ({ loading, error, success, requestLogin }: RegistrationFormProps): JSX.Element => {
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (setNewValueFn: Function, e: Event): void => {
    setNewValueFn(e.target.value)
  }

  const handleSubmit = (e: Event): void => {
    e.preventDefault()
    console.log('submit', name, email, password)
    requestLogin({
      email,
      password,
    })
  }

  return (
    <div className="form__container">
      <form>
        <TextField label="E-Mail" type="email" value={email} onChange={handleChange.bind(this, setEmail)} />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange.bind(this, setPassword)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: object): StoreDisplayProps => ({
  loading: state.authentication.isLoading,
  error: state.authentication.error,
  success: state.authentication.token,
})

const mapDispatchToProps = (dispatch): StoreDisplayProps => {
  return {
    requestLogin: (credentials: UserCredentials): void => {
      dispatch(loginRequest(credentials))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
