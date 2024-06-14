import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
