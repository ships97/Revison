import React from 'react'
 import {Route,Routes} from "react-router-dom"
import { Admin } from '../pages/Admin'
import { Home } from '../pages/Home'
import { Hotel } from '../pages/Hotel'
import { Login } from '../pages/Login'
export const MainRoutes = () => {
  return (
    <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/login" element={<Login/>}/>
        <Route to="/admin" element={<Admin/>}/>
        <Route to="/hotel" element={<Hotel/>}/>

    </Routes>
  )
}

