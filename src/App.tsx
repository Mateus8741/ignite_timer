import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyles } from './global/styles/styleglobal'
import { defaultTheme } from './global/styles/theme/default'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
