import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import rooms from '../db';

const getRoomData = (roomId) => {
  const data = rooms.filter(r => parseInt(r.id) === parseInt(roomId))
  return data;
}



const Room = () => {
  const roomId = useParams().id;
  const [days, setDays] = useState();
  const [fullName, setFullName] = useState();
  const [amountToPay, setAmountToPay] = useState()
  const [roomInfo, setRoomInfo] = useState(getRoomData(roomId));

  const calculate = (e) => {
    e.preventDefault();
    
    // just an extra measure
    if(days>roomInfo[0].availableFor || days<=0){
      alert("invalid input for days")
      return
    }
    const result = parseInt(days) * parseInt(roomInfo[0].dailyPrice) 
    setAmountToPay(result);
  }

  const makeReservations = () => {
    window.confirm("Your reservation is done, enjoy your stay")
  }

  return (<>
    <div className='font-bold w-5/6 text-cyan-500 flex flex-col items-center m-auto'>
      <h1 className='text-6xl text-center m-4 uppercase'>{roomInfo[0].name}</h1>
      <img src={roomInfo[0].src} alt="" />
      <p className='text-2xl'>{roomInfo[0].info}</p>
      <p className='text-2xl'>Daily Price is: {roomInfo[0].dailyPrice} Money Units</p>
      <p className='text-2xl'>For: {roomInfo[0].people}</p>
      <p className='text-2xl mb-4'>Available For: {roomInfo[0].availableFor} Days</p>
      <div className='mb-10'>
        <form onSubmit={calculate} className='bg-purple-50 p-5 '>
          <div className='flex flex-col min-w-[300px]'>
            <label htmlFor="full-name">Full Name</label>
            <input 
              placeholder='John Doe' 
              className='p-4' 
              name='full-name' 
              type="text" 
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className='flex flex-col min-w-[300px]'>
            <label htmlFor="days">Days</label>
            <input 
              placeholder='1' 
              className='p-4' 
              name='days' 
              type="number" 
              min={1}
              max={roomInfo[0].availableFor}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
          <input className='w-full mt-4 hover:bg-cyan-600 cursor-pointer rounded p-4 text-white text-2xl bg-cyan-700' type="submit" value="CALCULATE" />
        </form>
    </div>
    <div className='my-6'>
      {amountToPay ? <div className='mt-6 flex flex-col items-center'><p className='text-2xl'>Make reservation with the following information:</p><p className='text-xl'>Name: {fullName}</p><p>Amount To Pay: {amountToPay} Money</p><button className='w-full bg-purple-700 text-white p-4 rounded text-2xl mt-2' onClick={makeReservations}>Make Reservation</button></div> : ""}
    </div>
  </div>
  </>)
}

export default Room