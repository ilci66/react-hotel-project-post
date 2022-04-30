import React from 'react'
import { Outlet } from 'react-router-dom'

const rooms = () => {
  return (<>
    <div>rooms</div>
    <Outlet />
  </>
  )
}

export default rooms