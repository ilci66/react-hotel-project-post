import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import rooms from '../db';


const Rooms = () => {

  // nog is short for number of guests
  const [nog, setNog] = useState();
  const [budget, setBudget] = useState();
  const [days, setDays] = useState();

  // When the component is mounted we will render all the rooms
  // and when filtered is undefined as well
  const [allRooms, setAllRooms] = useState();

  // filtered will include the paramaters we want to filter the 
  // existing rooms by
  const [filtered, setFiltered] = useState(undefined)
  
  useEffect(() => {
    // When components mounts
    // This is the equivalent of componenetDidMount in classes
    setAllRooms(rooms);
  })

  const filterRooms = (e) => {
    // again prevent the refresh
    e.preventDefault();
    
    // filtering the rooms
    const result = allRooms.filter(room => room.dailyPrice <= budget && room.people >= nog && room.availableFor >= days )

    // Set the filtered, these are the ones we want to see
    setFiltered([...result]);
  }
  const clearFilter = () => {
    // Showing all the rooms
    setAllRooms(rooms);
    setFiltered(undefined)
  }

  
  return (<>
    <div className='flex flex-col items-center'>
      <form onSubmit={filterRooms} className='min-w-[300px] bg-purple-50 p-4 mt-6' >
        <div className='flex flex-col'>
          <label htmlFor="nog">Number of Guests (Max)</label>
          <input 
            className='bg-cyan-100 p-2'
            type="number" 
            onChange={(e) => setNog(e.target.value)}
            name='nog' 
            placeholder="1"
            max={4}
            min={1} 
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="price">Budget (Daily Max)</label>
          <input 
            className='bg-cyan-100 p-2'
            type="number" 
            name='price' 
            onChange={(e) => setBudget(e.target.value)}
            placeholder="100" 
            min={100}
            max={250}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="days">Days</label>
          <input 
            className='bg-cyan-100 p-2'
            type="number" 
            name='days' 
            onChange={(e) => setDays(e.target.value)}
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
        <button onClick={clearFilter} className='bg-purple-700 text-white p-2 mt-2 rounded w-full cursor-pointer hover:bg-purple-600 max-w-[300px]'>CLEAR FILTER</button>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 my-4'>
        {/* if there are no filtered, render all the rooms */}
        {allRooms && !filtered ? allRooms.map(r => <Link key={r.id} to={`${r.id}`}>
          <div >
            <img src={r.src} alt="" />
            <p className='text-2xl'>{r.name}</p>
            <p>Daily Price: {r.dailyPrice} Money Units</p>
            <p>Capacity: {r.people} People</p>
            <p>Available For: {r.availableFor} Days</p>
          </div>
          {/* if there are filtered render filtered */}
        </Link>): filtered ? filtered.map(r => <Link key={r.id} to={`${r.id}`}>
          <div >
            <img src={r.src} alt="" />
            <p className='text-2xl'>{r.name}</p>
            <p>Daily Price: {r.dailyPrice} Money Units</p>
            <p>Capacity: {r.people} People</p>
            <p>Available For: {r.availableFor} Days</p>
          </div>
        </Link>): ""}
      </div>
    </div>
    
  </>)
}

export default Rooms