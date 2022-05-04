import React from 'react'
import Carousel from '../components/Carousel'
import HomeFacilities from '../components/HomeFacilities'
import beach from '../images/beach.jpg'
import { Link } from 'react-router-dom'
import rooms from '../db/index';

const Home = () => {

  return (<>
    <h1 className='text-center text-6xl font-bold text-cyan-500 underline'>Welcome to Our Super Awesome Hotel</h1> 
    <img className='mt-10 object-cover h-96' src={beach} alt="A beautiful beach" />
    <Link to="/rooms"><h2 className='text-center text-4xl my-8 underline font-bold text-cyan-500'>Available Rooms</h2></Link>
    <Carousel images={rooms} />
    <HomeFacilities />
  </>)
}

export default Home