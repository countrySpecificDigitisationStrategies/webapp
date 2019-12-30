import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generatePath, Link, useHistory } from 'react-router-dom'

import {
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import {
  AccountCircle,
  Assessment,
  Chat,
  ChevronLeft,
  ExitToApp,
  Home,
  Language,
  Lock,
  LockOpen,
  Timeline,
} from '@material-ui/icons'

import { logout } from 'features/authentication'
import ziikLogo from 'assets/ziik.jpg'
import { useLoginStatus } from 'shared/hooks'
import { APP_ROUTES } from 'app/routes'
import { closeNavBar, isNavBarOpen } from 'features/ui/store'
import { navigationStyles } from './navigation.classes'
import { CountrySelectionDialog } from 'features/countrySelection/components/CountrySelectionDialog'
import { selectedCountry } from 'features/countrySelection/store/selectors'
import { selectCountry } from 'features/countrySelection/store/actions'
import { Country } from 'features/countrySelection/store/types'

interface NavItem {
  key: string
  route: string
  icon: JSX.Element
  text: string
}

const createNavItems = (selectedCountry: Country | null): NavItem[] => {
  return [
    {
      key: 'home',
      route: APP_ROUTES.home,
      icon: <Home />,
      text: 'Home',
    },
    {
      key: 'analysis',
      route:
        selectedCountry !== null
          ? generatePath(APP_ROUTES.analysis, { countryId: selectedCountry.id })
          : APP_ROUTES.analyses,
      icon: <Assessment />,
      text: 'Analysis',
    },
    {
      key: 'strategy',
      route:
        selectedCountry !== null
          ? generatePath(APP_ROUTES.strategy, { strategyId: selectedCountry.strategyId })
          : APP_ROUTES.strategies,
      icon: <Timeline />,
      text: selectedCountry !== null ? 'Strategy' : 'Strategies',
    },
    {
      key: 'discussions',
      route:
        selectedCountry !== null
          ? generatePath(APP_ROUTES.discussion, { countryId: selectedCountry.id })
          : APP_ROUTES.discussions,
      icon: <Chat />,
      text: 'Discussions',
    },
  ]
}

const Navigation = (): JSX.Element => {
  const classes = navigationStyles()

  const dispatch = useDispatch()
  const isOpen = useSelector(isNavBarOpen)
  const isLoggedIn = useLoginStatus()
  const country = useSelector(selectedCountry)
  const [openCountrySelection, setOpenCountrySelection] = React.useState(false)

  const history = useHistory()

  const theme = useTheme()
  const isBigView = useMediaQuery(theme.breakpoints.up('sm'))

  const handleDrawerClose = () => {
    dispatch(closeNavBar())
  }
  const handleNavigation = () => {
    if (!isBigView) {
      handleDrawerClose()
    }
  }
  const handleClickCountrySelection = () => {
    setOpenCountrySelection(true)
  }

  const handleCloseCountrySelection = (newCountry?: Country | null) => {
    setOpenCountrySelection(false)
    if (newCountry !== undefined && newCountry !== country) {
      dispatch(selectCountry(newCountry))

      const pathTopCategory = `/${window.location.pathname.split('/')[1]}`
      if (pathTopCategory === '') return
      if (newCountry === null) {
        history.push(pathTopCategory)
      } else {
        if (pathTopCategory === '/analyses' || pathTopCategory === '/discussions') {
          history.push(`${pathTopCategory}/countries/${newCountry.id}`)
        } else {
          history.push(`${pathTopCategory}/${newCountry.strategyId}`)
        }
      }
    }
  }

  const createNavList = (navItems: NavItem[]): JSX.Element[] => {
    return navItems.map((item: NavItem) => (
      <React.Fragment key={item.key}>
        <List>
          <ListItem button component={Link} to={item.route} onClick={handleNavigation}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </List>
        <Divider />
      </React.Fragment>
    ))
  }

  const drawer = (
    <div>
      <div className={clsx(classes.toolbar, 'navigation__header')}>
        <img
          src={ziikLogo}
          alt="ZiiK logo"
          height="40px"
          onClick={() => window.open('https://www.ziik.tu-berlin.de/menue/ziik/parameter/en/', '_blank')}
          className="navigation__header__logo"
        />
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        {country === null ? (
          <ListItem button onClick={handleClickCountrySelection}>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Country" />
          </ListItem>
        ) : (
          <ListItem button onClick={handleClickCountrySelection}>
            <img
              className="navigation__flag"
              src={country.flagCircleURL}
              alt={'Flag of ' + country.name}
              height="24px"
            />
            <ListItemText primary={country.name} />
          </ListItem>
        )}
        <CountrySelectionDialog
          initialSelected={country}
          open={openCountrySelection}
          onClose={handleCloseCountrySelection}
        />
      </List>
      <Divider />
      {createNavList(createNavItems(country))}

      {isLoggedIn ? (
        <Hidden smUp>
          <List>
            <ListItem button component={Link} to={APP_ROUTES.account} onClick={handleNavigation}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
            <ListItem button onClick={() => dispatch(logout())}>
              <ListItemIcon>
                <Lock />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
        </Hidden>
      ) : (
        <Hidden smUp>
          <List>
            <ListItem button component={Link} to={APP_ROUTES.login} onClick={handleNavigation}>
              <ListItemIcon>
                <LockOpen />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to={APP_ROUTES.register} onClick={handleNavigation}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
          <Divider />
        </Hidden>
      )}
    </div>
  )

  return (
    <nav>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: isOpen,
              [classes.drawerClose]: !isOpen,
            }),
          }}
          open={isOpen}>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Navigation
