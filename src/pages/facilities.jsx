import React from 'react'
import pBeach from '../images/pbeach.jpg';
import pool from '../images/pool3.jpg';
import restaurant from '../images/restaurant.jpg';
import spa from '../images/spa.jpg';
import gym from '../images/gym.jpg';

const facilities = () => {
  return (<>
    <div className='text-cyan-500 flex flex-col items-center'>
      <div className='border-b-2 border-cyan-500 p-2 m-4 w-4/5 gap-4 grid grid-cols-3'>
        <h2 className='font-bold col-span-3 text-center text-4xl'>POOL</h2>
        <img className='col-span-2' src={pool} alt="pool pic" />
        <p className='text-4xl col-span-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate quia dolor perferendis, magnam quod rerum reprehenderit, nostrum temporibus sequi suscipit veniam, ea iste ipsum qui delectus enim autem incidunt.</p>
      </div>
      <div className='border-b-2 border-cyan-500 p-2 m-4 w-4/5 gap-4 grid grid-cols-3'>
        <h2 className='font-bold col-span-3 text-center text-4xl'>GYM</h2>
        <p className='text-4xl col-span-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate quia dolor perferendis, magnam quod rerum reprehenderit, nostrum temporibus sequi suscipit veniam, ea iste ipsum qui delectus enim autem incidunt.</p>
        <img className='col-span-2' src={gym} alt="" />
      </div>
      <div className='border-b-2 border-cyan-500 p-2 m-4 w-4/5 gap-4 grid grid-cols-3'>
        <h2 className='font-bold col-span-3 text-center text-4xl'>RESTAURANT</h2>
        <img className='col-span-2' src={restaurant} alt="pool pic" />
        <p className='text-4xl col-span-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate quia dolor perferendis, magnam quod rerum reprehenderit, nostrum temporibus sequi suscipit veniam, ea iste ipsum qui delectus enim autem incidunt.</p>
      </div>
      <div className='border-b-2 border-cyan-500 p-2 m-4 w-4/5 gap-4 grid grid-cols-3'>
        <h2 className='font-bold col-span-3 text-center text-4xl'>PRIVATE BEACH</h2>
        <p className='text-4xl col-span-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate quia dolor perferendis, magnam quod rerum reprehenderit, nostrum temporibus sequi suscipit veniam, ea iste ipsum qui delectus enim autem incidunt.</p>
        <img className='col-span-2' src={pBeach} alt="" />
      </div>
      <div className='border-b-2 border-cyan-500 p-2 m-4 w-4/5 gap-4 grid grid-cols-3'>
        <h2 className='font-bold col-span-3 text-center text-4xl'>SPA</h2>
        <img className='col-span-2' src={spa} alt="pool pic" />
        <p className='text-4xl col-span-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate quia dolor perferendis, magnam quod rerum reprehenderit, nostrum temporibus sequi suscipit veniam, ea iste ipsum qui delectus enim autem incidunt.</p>
      </div>
    </div>
  </>)
}

export default facilities