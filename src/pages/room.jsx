import React from 'react'
import { useParams } from 'react-router-dom';

const Room = () => {
  console.log(useParams())
  return (
    <div>dynamic Room</div>
  )
}

export default Room