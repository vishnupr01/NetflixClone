import React from 'react'
import { userAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProctectedRoute = ({ children }) => {
  const { user } = userAuth()
  if(!user)return <Navigate to="/" />
  
 

  return children
}

export default ProctectedRoute