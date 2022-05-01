import React from 'react'
import { Link } from 'react-router-dom'

const HomeFacilities = () => {
  return (
    <Link to="/facilities">
    <div className='text-white grid grid-cols-2 gap-4 m-auto mb-6 w-11/12'>
      <h2 className='col-span-full text-center text-4xl my-8 underline font-bold text-cyan-500'>Explore the facilities</h2>
      <div class="rounded p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h3 className='font-bold text-2xl'>POOL</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error corrupti exercitationem possimus expedita inventore, dolores amet repellat veniam mollitia, est iure praesentium fuga sit architecto quam neque facilis dolorum!</p>
      </div>
      <div class="rounded p-8 bg-gradient-to-r from-sky-500 to-indigo-500">
        <h3 className='font-bold text-2xl'>GYM</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error corrupti exercitationem possimus expedita inventore, dolores amet repellat veniam mollitia, est iure praesentium fuga sit architecto quam neque facilis dolorum!</p>
      </div>
      <div class="rounded p-8 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <h3 className='font-bold text-2xl'>RESTAURANT</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error corrupti exercitationem possimus expedita inventore, dolores amet repellat veniam mollitia, est iure praesentium fuga sit architecto quam neque facilis dolorum!</p>
      </div>
      <div class="rounded p-8 bg-gradient-to-r from-purple-500 to-pink-500">
        <h3 className='font-bold text-2xl'>PRIVATE BEACH</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error corrupti exercitationem possimus expedita inventore, dolores amet repellat veniam mollitia, est iure praesentium fuga sit architecto quam neque facilis dolorum!</p>
      </div>
    </div>
    </Link>
  )
}

export default HomeFacilities