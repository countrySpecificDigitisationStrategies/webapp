import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
  AccountTree,
  Assessment,
  Chat,
  ChevronLeft,
  ExitToApp,
  Home,
  Lock,
  LockOpen,
  School,
  SupervisorAccount,
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

interface NavItem {
  key: string
  isSubItem?: boolean
  route: string
  icon: JSX.Element
  text: string
}

const homeNavItems: NavItem[] = [
  {
    key: 'home',
    route: APP_ROUTES.home,
    icon: <Home />,
    text: 'Home',
  },
]

const analysisNavItems: NavItem[] = [
  {
    key: 'analysis',
    route: APP_ROUTES.analysis,
    icon: <Assessment />,
    text: 'Analysis',
  },
]
const strategiesNavItems: NavItem[] = [
  {
    key: 'strategy',
    route: APP_ROUTES.strategies,
    icon: <Timeline />,
    text: 'Strategy',
  },
  {
    key: 'education',
    isSubItem: true,
    route: APP_ROUTES.education,
    icon: <School />,
    text: 'Education',
  },
  {
    key: 'infrastructure',
    isSubItem: true,
    route: APP_ROUTES.infrastructure,
    icon: <AccountTree />,
    text: 'Infrastructure',
  },
  {
    key: 'management',
    isSubItem: true,
    route: APP_ROUTES.management,
    icon: <SupervisorAccount />,
    text: 'Management',
  },
]
const discussionNavItems: NavItem[] = [
  {
    key: 'discussions',
    route: APP_ROUTES.discussion,
    icon: <Chat />,
    text: 'Discussions',
  },
]

const Navigation = (): JSX.Element => {
  const classes = navigationStyles()

  const dispatch = useDispatch()
  const isOpen = useSelector(isNavBarOpen)
  const isLoggedIn = useLoginStatus()
  const country = useSelector(selectedCountry)
  const [openCountrySelection, setOpenCountrySelection] = React.useState(false)

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

  const handleCloseCountrySelection = (newCountry?: string) => {
    setOpenCountrySelection(false)

    if (newCountry !== undefined) {
      dispatch(selectCountry(newCountry))
    }
  }

  const createNavList = (navItems: NavItem[]): JSX.Element => {
    return navItems.map((item: NavItem) => (
      <ListItem
        button
        className={clsx({ navSubItem: item.isSubItem && isOpen })}
        component={Link}
        to={item.route}
        key={item.key}
        onClick={handleNavigation}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
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
      <List>{createNavList(homeNavItems)}</List>
      <Divider />
      <List>
        {country === null ? (
          <ListItem button onClick={handleClickCountrySelection}>
            <img
              className="navigation__flag"
              src="https://image.flaticon.com/icons/svg/197/197591.svg" //TODO change URL to icon url from server
              alt={'united nations flag'}
              height="24px"
            />
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
      <List>{createNavList(analysisNavItems)}</List>
      <Divider />
      <List>{createNavList(strategiesNavItems)}</List>
      <Divider />
      <List>{createNavList(discussionNavItems)}</List>
      <Divider />
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
