import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './Theme/GlobalTheme'
import { GlobalAnimations } from './Theme/Animation'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <GlobalAnimations />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
