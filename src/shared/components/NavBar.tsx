import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useLoginStatus } from 'shared/hooks'
import { LogoutButton } from 'features/authentication'

const NavBar = (): JSX.Element => {
  const isLoggedIn = useLoginStatus()

  return (
    <AppBar className="NavBar" position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" className="NavBar-menuButton" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className="NavBar-title">
          Digitisation Strategies
        </Typography>

        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/register" color="secondary" variant="outlined">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
