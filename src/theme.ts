import { createMuiTheme } from '@material-ui/core'
const defaultTheme = createMuiTheme()
export default createMuiTheme({
  palette: {
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffe4',
      main: '#ffe0b2',
      dark: '#cdae82',
      contrastText: '#000',
    },
  },
  typography: {
    h3: {
      marginBottom: defaultTheme.spacing(2),
    },
    body1: {
      marginBottom: defaultTheme.spacing(3),
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        marginTop: defaultTheme.spacing(1),
        marginBottom: defaultTheme.spacing(1),
      },
    },
    MuiButton: {
      root: {
        marginTop: defaultTheme.spacing(2),
        marginBottom: defaultTheme.spacing(2),
      },
    },
  },
})
