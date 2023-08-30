import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'

export default function Header() {
    const [toggle, setToggle] = useState(false);
  return ( 
    <div className='bg-sky-600 p-4'> 
    <div className="max-w-[1240px] py-[12px] flex justify-between items-center mx-auto">
        <div className='text-3xl font-bold'>
            Vishal Tech
        </div>
    {
        toggle ?
        <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white  text-2xl md:hidden block'/>
       :
       <AiFillCloseCircle onClick={()=> setToggle(!toggle)} className='text-white  text-2xl md:hidden block'/>
       
    }
    <ul className='hidden md:flex gap-10 text-white font-bold'>
      
            <li>
                Home
            </li>
            <li>
                Company
            </li>
            <li>
                Resources
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>

        {/* responsive menu */}
        <ul className={`md:hidden w-full h-full fixed text-white bg-black top-[92px] font-bold 
        ${toggle ? 'left-[0]' : 'left-[-100%]' }`}>
            <li className='p-3'>
                Home
            </li>
            <li className='p-3'>
                Company
            </li>
            <li className='p-3'>
                Resources
            </li>
             <li className='p-3'>
                About
            </li>
            <li className='p-3'>
                Contact
            </li>
        </ul>
        {/* responsive menu */}

    </div>
     </div>
  )
}
