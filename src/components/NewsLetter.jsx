import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto flex justify-between py-[50px]'>
      <div className='m-2'>
        <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
        <span className='text-white'>
          Sign up to your newsletter and up to date.
        </span>
      </div>

      <div className='m-2'>
        <input type="text" name="" id="1" className=' mb-2m p-3 mx-2 text-gray text-state-600' placeholder='Email' />
        <butten class="bg-black text-white p-3 rounded "> Get Started</butten> 
        <br />
        <p className='text-white'>
          We care about the protection of your data. Read our <br /> 
          <a href='/' className='text-black'> Privacy Policy</a>

        </p>
      </div>
      </div>
    </div>
  )
}
