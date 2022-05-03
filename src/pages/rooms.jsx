import React, { useEffect, useState, useLayoutEffect } from 'react';

import room1pic from '../images/room1.jpg'
import room2pic from '../images/room2.jpg'
import room3pic from '../images/room3.jpg'
import room4pic from '../images/room4.jpg'
import room5pic from '../images/room5.jpg'
import room6pic from '../images/room6.jpg'

const rooms = [
  { id:1, src: room1pic, info:"A cozy room for 2", name:"Room 1", people: 2, dailyPrice:100 },
  { id:2, src: room2pic, info:"A cozy room for 2", name:"Room 2", people: 1, dailyPrice:150 },
  { id:3, src: room3pic, info:"A cozy room for 2", name:"Room 3", people: 2, dailyPrice:200 },
  { id:4, src: room4pic, info:"A cozy room for 2", name:"Room 4", people: 4, dailyPrice:100 },
  { id:5, src: room5pic, info:"A cozy room for 2", name:"Room 5", people: 2, dailyPrice:50 },
  { id:6, src: room6pic, info:"A cozy room for 2", name:"Room 6", people: 1, dailyPrice:250 },
];

const Rooms = () => {

  const [filteredRooms, setFilteredRooms] = useState();
  useLayoutEffect(() => {
    setFilteredRooms(rooms);
    // console.log(filteredRooms)
  })

  
  return (<>
    <div className='flex flex-col items-center'>
      <form className='min-w-[300px] bg-purple-50 p-4 mt-6' >
        <div className='flex flex-col'>
          <label htmlFor="nop">Number of People</label>
          <input 
            className='bg-cyan-100 p-2'
            type="number" 
            name='nop' 
            placeholder="1"
            max={4}
            min={1} 
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="price">Maximum daily price</label>
          <input 
            className='bg-cyan-100 p-2'
            type="number" 
            name='price' 
            placeholder="100" 
            min={100}
            max={250}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="days">For how many days</label>
          <input 
            className='bg-cyan-100 p-2'
            type="number" 
            name='days' 
            placeholder="2" 
            min={1}
            max={30}
          />
        </div>
        <input 
          type="submit" 
          value="FILTER" 
          className='bg-cyan-700 text-white p-2 mt-2 rounded w-full cursor-pointer hover:bg-cyan-600'
        />
      </form>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 mt-4'>
        {filteredRooms ? filteredRooms.map(r => <div key={r.id}>
          <img src={r.src} alt="" />
          {r.id}
          
        </div>): ""}
      </div>
    </div>
    
  </>)
}

export default Rooms