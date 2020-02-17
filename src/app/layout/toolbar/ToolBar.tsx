import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppBar, Button, Hidden, IconButton, ListItemIcon, Menu, MenuItem, Toolbar } from '@material-ui/core'
import { AccountCircle, Lock } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'

import disco from 'assets/disco.svg'
import { logout } from 'features/account'
import { useLoginStatus } from 'shared/hooks'
import { APP_ROUTES } from 'app/routes'
import { isNavBarOpen, openNavBar } from 'features/ui/store'
import { toolBarStyles } from './toolBar.classes'

const ToolBar = (): JSX.Element => {
  const classes = toolBarStyles()

  const dispatch = useDispatch()
  const isNavigationOpen = useSelector(isNavBarOpen)
  const isLoggedIn = useLoginStatus()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)

  const handleDrawerOpen = () => {
    dispatch(openNavBar())
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isNavigationOpen,
      })}>
      <Toolbar className="toolbar">
        <div className="toolbar-header">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: isNavigationOpen,
            })}>
            <MenuIcon />
          </IconButton>
          <img src={disco} alt="digitization strategies for developing countries" height="32px" />
        </div>
        <div className="toolbar-tools">
          {isLoggedIn ? (
            <Hidden xsDown>
              <IconButton onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openMenu}
                onClose={handleClose}>
                <MenuItem component={Link} to={APP_ROUTES.account} onClick={handleClose}>
                  <ListItemIcon className="menu-icon">
                    <AccountCircle />
                  </ListItemIcon>
                  Account
                </MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>
                  <ListItemIcon className="menu-icon">
                    <Lock />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Hidden>
          ) : (
            <Hidden xsDown>
              <Button component={Link} to={APP_ROUTES.login} className="toolbar-tools__item" color="inherit">
                Login
              </Button>
              <Button
                component={Link}
                to={APP_ROUTES.register}
                className="toolbar-tools__item"
                color="secondary"
                variant="outlined">
                Register
              </Button>
            </Hidden>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default ToolBar
