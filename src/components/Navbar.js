import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className='text-white px-8 py-6 bg-cyan-500 flex flex-row justify-between'>
      <Link className='font-bold text-2xl' to="/">HOME</Link>
      <div>
        <NavLink to="rooms"/>
        <NavLink to="facilities"/>
        <NavLink to="contact"/>
      </div>
    </nav>
  )
}

export default Navbar