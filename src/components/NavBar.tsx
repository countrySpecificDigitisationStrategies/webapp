import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { logout } from '../store/authentication/actions'

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn)

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
          <Button onClick={() => dispatch(logout)} color="inherit">
            Logout
          </Button>
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
