import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import ProctectedRoute from './components/ProctectedRoute'

const App = () => {
  return (
  <>
  <AuthContextProvider>
  <Navbar />
  <Routes>
    <Route path='/' element ={<Home />} />
    <Route path='/login' element ={<Login />} />
    <Route path='/profile' element ={<ProctectedRoute><Profile/></ProctectedRoute>} />
    <Route path='/signup' element ={<Signup />} />
  </Routes>
  </AuthContextProvider>
  </>
  )
}

export default App
