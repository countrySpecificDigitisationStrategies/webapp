import React, { useState } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { registrationRequest } from '../store/registration/actions'

const RegistrationForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.registration.isLoading)
  const error = useSelector(state => state.registration.error)
  const success = useSelector(state => state.registration.isSuccess)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const handleChange = (setNewValueFn: Function, e: Event): void => {
    setNewValueFn(e.target.value)
  }

  const handleSubmit = (e: Event): void => {
    e.preventDefault()
    dispatch(
      registrationRequest({
        name,
        email,
        password,
      })
    )
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

export default RegistrationForm
