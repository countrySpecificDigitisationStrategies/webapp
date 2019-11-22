import React from 'react'
import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'

import { logout } from '../store'
import { useDispatch } from 'react-redux'

interface LogoutButtonProps extends ButtonProps {
  text?: string
}

const LogoutButton = ({ text = 'Logout', ...props }: LogoutButtonProps): JSX.Element => {
  const dispatch = useDispatch()
  return (
    <Button {...props} onClick={() => dispatch(logout())}>
      {text}
    </Button>
  )
}

export default LogoutButton
