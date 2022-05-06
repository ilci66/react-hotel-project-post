/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// Had to change the name as I named my component Carousel as well
import { Carousel as C } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

// Data will be passed down to this components
const Carousel = ({rooms}) => {
  return (<>
    <C className='m-auto md:w-3/5 sm:w-4/5'>
      {/* we will map through and create our carousel */}
      {rooms.map(i => {
        return <div>
        <img src={i.src} />
        <p className="legend">{i.name}</p>
    </div>
      })}
    </C>
    <Link className='m-auto text-2xl text-cyan-500' to="/rooms">
      Choose your room and make your reservation  
    </Link>
  </>)
}

export default Carousel