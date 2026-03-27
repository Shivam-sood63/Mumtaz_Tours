import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
