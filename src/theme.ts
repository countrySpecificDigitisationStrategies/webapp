import { createMuiTheme } from '@material-ui/core'
const defaultTheme = createMuiTheme()
export default createMuiTheme({
  palette: {
    primary: {
      light: '#5d6672',
      main: '#333c47',
      dark: '#0d1620',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#68dd8e',
      main: '#2faa60',
      dark: '#007a35',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        marginTop: defaultTheme.spacing(1),
        marginBottom: defaultTheme.spacing(1),
      },
    },
  },
})
