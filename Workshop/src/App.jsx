// import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='characters' element={<Characters />} />
      <Route path='character/:id' element={<Character />} />
    </Routes>
  )
}

export default App
