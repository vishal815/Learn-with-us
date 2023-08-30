 import React from 'react'
//  import Typed from 'react-typed';
 
 export default function Banner() {
   return (
     <div div className='bg-sky-600 w-full py-[50px]'>
       <div className='max-w-[1240px] mx-auto text-center font-bold my-[100px]'>
        
        <div className='text-xl font-bold md:text-3xl md:p-[20px]'>
        Learn with us
        </div>

       <h2 className='text-white font-bold text-5xl md:text-[80px] p-[24px]'>Grow with us.</h2>
       <div className='text-[20px] md:text-[50px] md:p-[20px] text-white my-4'>Learn 
       {/* <Typed
                    className='pl-3'
                    strings={['Machine Learning.', 'DevOps.', 'Web Development.']}                  //npm install react-typed --save     (React typed)
                    typeSpeed={120}
                    loop={true}
                /> */}
       </div>
       <butten class="bg-black text-white p-3 rounded "> Get Started</butten>
       </div>
     </div>
   )
 }
 