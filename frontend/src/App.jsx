
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/' element={<Signup />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App