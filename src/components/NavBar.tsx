import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { logout } from '../store/authentication/actions'

type NavBarProps = {
  isLoggedIn: boolean
  logout: () => void
}

function NavBar({ isLoggedIn, logout }: NavBarProps): JSX.Element {
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
          <Button onClick={logout} color="inherit">
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

const mapStateToProps = (state: object): NavBarProps => ({
  isLoggedIn: state.authentication.token !== null,
})

const mapDispatchToProps = (dispatch): NavBarProps => {
  return {
    logout: (): void => {
      dispatch(logout())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
