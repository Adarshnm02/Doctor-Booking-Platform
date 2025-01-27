import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import UserLogin from '../Componets/UserLogin'
const UserRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<UserLogin/>}/>
    </Routes>
  )
}

export default UserRoutes
