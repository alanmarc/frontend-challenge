import React from 'react'
import ReactDOM from 'react-dom'
import Home from './App'
import BaseStyles from './components/global-styled'
import UserProvider from './context/user-context'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
      <UserProvider>
        <BaseStyles theme={{}} />
        <Home />
      </UserProvider>
  )
}
