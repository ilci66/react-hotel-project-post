import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({to}) => {
  return (
    <Link className='font-bold m-1 text-xl uppercase' to={`/${to}`} >{to}</Link>
  )
}

export default NavLink