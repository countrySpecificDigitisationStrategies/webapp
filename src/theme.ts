import { createMuiTheme } from '@material-ui/core'
const defaultTheme = createMuiTheme()
export default createMuiTheme({
  palette: {
    primary: {
      light: '#97cffc',
      main: '#659EC9',
      dark: '#317098',
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
