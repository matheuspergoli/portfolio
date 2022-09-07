import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './Theme/GlobalTheme'
import { GlobalAnimations } from './Theme/Animation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalAnimations />
    <App />
  </React.StrictMode>
)
