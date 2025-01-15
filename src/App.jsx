import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import appTheme from './theme'

function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Button color="primary" variant='contained'>Primary Button</Button>
      <Button color="secondary" variant='contained'>Secondary Button</Button>
    </ThemeProvider>
  )
}

export default App
