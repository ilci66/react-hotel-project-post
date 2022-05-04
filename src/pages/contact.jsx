import React, { useState } from 'react'

const Contact = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("thank you for contacting us, we will get back to you as soon as we can.");
    console.log(email, subject, text)

  }

  return (<>
  <form onSubmit={e => handleSubmit(e)} className='m-auto mb-6 sm:w-4/5 lg:w-3/5'>
    <div className='mt-2 flex flex-col'>
      <label 
        htmlFor="f-email"
      >
        Your email address:
      </label>
      <input 
        onChange={(e) => setEmail(e.target.value)}
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
        onChange={(e) => setSubject(e.target.value)}
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
        onChange={(e) => setText(e.target.value)}
        className='rounded bg-cyan-100 p-4'
        name="f-text" 
        id="" 
        cols="30" 
        rows="10"
      ></textarea>
    </div>
    <input className='p-4 rounded mt-4 font-bold text-white text-2xl cursor-pointer hover:bg-cyan-700 w-full m-auto bg-cyan-800' type="submit" value="SUBMIT" />
  </form>
  </>)
}

export default Contact