import React from 'react'
import { useState } from 'react'

const contact = () => {
  const handleSubmit = (e) => {
    
  }

  return (<>
<form className='m-auto mb-6 w-3/5'>
  <div className='mt-2 flex flex-col'>
    <label 

      htmlFor="f-email"
    >
      Your email address:
    </label>
    <input 
      className='rounded p-4 bg-cyan-100' 
      type="email" 
      name="f-email" 
    />
  </div>
  <div className='mt-2 flex flex-col'>
    <label htmlFor="f-subject">
      Subject
    </label>
    <input 
      className='rounded bg-cyan-100 p-4'
      type="text" 
      name="f-subject" 
    />
  </div>
  <div className='mt-2 flex flex-col'>
    <label htmlFor="f-text">
      What would you like to tell us
    </label>
    <textarea 
      className='rounded bg-cyan-100 p-4'
      name="f-text" 
      id="" 
      cols="30" 
      rows="10"
    ></textarea>
  </div>
</form>
  </>)
}

export default contact