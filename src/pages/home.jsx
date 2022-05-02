import React from 'react'
import Carousel from '../components/Carousel'
import HomeFacilities from '../components/HomeFacilities'
import beach from '../images/beach.jpg'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import room3 from '../images/room3.jpg'
import room4 from '../images/room4.jpg'
import room5 from '../images/room5.jpg'
import room6 from '../images/room6.jpg'
import { Link } from 'react-router-dom'


const Home = () => {

  const images = [
    {src:room1, alt: "a nice room", text:"room 1"},
    {src:room2, alt: "another nice room", text:"room 2"},
    {src:room3, alt: "an even nicer room", text: "room 3"},
    {src:room4, alt: "a nice room", text:"room 4"},
    {src:room5, alt: "a nice room", text:"room 5"},
    {src:room6, alt: "a nice room", text:"room 6"},
  ]

  return (<>
  <h1 className='text-center text-6xl font-bold text-cyan-500 underline'>Welcome to Our Super Awesome Hotel</h1> 
  <img className='mt-10 object-cover h-96' src={beach} alt="A beautiful beach" />
  <Link to="/rooms"><h2 className='text-center text-4xl my-8 underline font-bold text-cyan-500'>Available Rooms</h2></Link>
  <Carousel images={images} />
  <HomeFacilities />
  </>)
}

export default Home