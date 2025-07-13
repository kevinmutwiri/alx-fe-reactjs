import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography, always seeking new adventures."
      />
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App