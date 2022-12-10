import React from 'react'
import { Login } from './Login';
import { Signup } from './Signup';
import { Home } from './Home';
import { Counter } from '../Counter';
import { Route, Routes } from 'react-router-dom';



export const MainRoutes = () => {
  return (
    <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/counter" element={<Counter/>}/>
    </Routes>
  )
}
