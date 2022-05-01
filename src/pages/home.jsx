import React from 'react'
import Carousel from '../components/Carousel'
import beach from '../images/beach.jpg'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'



const home = () => {

  const images = [
    {src:room1, alt: "a nice room"},
    {src:room2, alt: "another nice room"},
    {src:room3, alt: "an even nicer room"}
  ]

  return (<>
  <img src={beach} alt="A beautiful beach" />
  <h2>Available Rooms</h2>
  <Carousel images={images} />

  </>)
}

export default home