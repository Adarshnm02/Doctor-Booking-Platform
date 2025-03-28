import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../Componets/UserLogin.js'
function UserRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<UserLogin />} />
    </Routes>
  )
}

export default UserRoutes
