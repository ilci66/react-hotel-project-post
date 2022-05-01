/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as C } from 'react-responsive-carousel';

const Carousel = ({images}) => {
  return (
    <C className='m-auto md:w-3/5 sm:w-4/5'>
      {images.map(i => {
        return <div>
        <img src={i.src} />
        <p className="legend">{i.text}</p>
    </div>
      })}
</C>
  )
}

export default Carousel