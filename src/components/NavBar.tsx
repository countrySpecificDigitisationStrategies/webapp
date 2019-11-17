import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function NavBar(): JSX.Element {
  return (
    <AppBar className="NavBar" position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" className="NavBar-menuButton" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className="NavBar-title">
          Digitisation Strategies
        </Typography>

        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/register" color="secondary" variant="outlined">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  )
}
