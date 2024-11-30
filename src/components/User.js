import React, { useState } from 'react'

const User = () => {
  const [count] = useState(0)
  
  
  return (
    <div className='p-10 border-black'>
       <h1>Count: {count}</h1>
       <h2>Name: Rishabh Kirodiwal</h2>
       <h3>Location: Rajasthan</h3>
       <h4>Contact: r.rishabhkirodiwal@gmail.com</h4>
    </div>
  )
}

export default User
