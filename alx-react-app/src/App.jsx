import UserProfile from './components/UserProfile'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography, always seeking new adventures."
      />
    </>
  )
}

export default App
