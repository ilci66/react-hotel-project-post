import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const home = () => {
  return (<>
    <Outlet />
    <h1>home</h1>
  </>)
}

export default home