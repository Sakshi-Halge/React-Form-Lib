import { Button } from '@mui/material'
import './App.css'
import AppThemeConfig from './theme'

function App() {

  return (
    <AppThemeConfig>
      <Button color="primary" variant='contained'>Primary Button</Button>
      <Button color="secondary" variant='contained'>Secondary Button</Button>
    </AppThemeConfig>
  )
}

export default App
