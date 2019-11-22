import React, { useState } from 'react'
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store'
import { getError, isLoading, isLoggedIn } from '../store/selectors'

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const loading = useSelector(isLoading)
  const error = useSelector(getError)
  const success = useSelector(isLoggedIn)

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
    dispatch(login({ email, password }))
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

export default LoginForm
