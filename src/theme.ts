import { createMuiTheme } from '@material-ui/core'
const defaultTheme = createMuiTheme()
export default createMuiTheme({
  palette: {
    primary: {
      light: '#99cff8',
      main: '#679EC5',
      dark: '#347094',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#fff463',
      main: '#f9c22d',
      dark: '#c29200',
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
