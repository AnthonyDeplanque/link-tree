import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SelectedGamesContextProvider } from './context/randomizer/SelectedGamesContextProvider.tsx'

// DO NOT TOUCH THIS FILE
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectedGamesContextProvider>
      <App />
    </SelectedGamesContextProvider>
  </React.StrictMode>,
)
