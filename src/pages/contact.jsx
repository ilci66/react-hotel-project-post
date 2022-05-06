import React, { useState } from 'react'

const Contact = () => {

  // This is how the state is managed in fucntional components
  // We are initializing the values we will use as empty strings
  // and the second keywords in the arrays will be used to set them
  // seeing it in action below will be more explanantory
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    // default behaviour is to refresh the page, we don't want that
    e.preventDefault()
    // alerting the guest and logging the information sent to us
    alert("thank you for contacting us, we will get back to you as soon as we can.");
    console.log(email, subject, text)

  }

  return (<>
  {/* when the user hits submit (or enter) */}
  {/* run handleSubmit fucntion with event as it's argument */}
  <form onSubmit={e => handleSubmit(e)} className='m-auto mb-6 sm:w-4/5 lg:w-3/5'>
    <div className='mt-2 flex flex-col'>
      <label htmlFor="f-email" >
        Your email address:
      </label>
      <input 
        // whenever the input changes, update the state
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
        // whenever the input changes, update the state
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
        // whenever the input changes, update the state
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