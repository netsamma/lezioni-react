import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'

function App() {
  const [value, setValue] = useState("X")

  return (
    <>
      <Square value={value}/>
    </>
  )
}

export default App
