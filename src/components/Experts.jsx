import React from 'react'
import laptop from "../assets/img/laptop.gif"

export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
    <div className='border-[blue] col-span-1 md:w-[80%] text-center'>
      <img src={laptop} alt="" />
    </div>
    <div className='col-span-1 flex flex-col justify-center '> 
    <h1 className='text-[#00df9a] font-bold my-2'>LEARN FORM GOOD RESOUSES</h1>
    <p className='my-2 text-justify '>
    <ul>
  <li><strong>Machine Learning:</strong> TensorFlow and Springboard offer a variety of resources to help you learn about machine learning, including curated curriculums, books, videos, and online courses.</li>
  <li><strong>Deep Learning:</strong> Analytics India Magazine and DeepMind offer a variety of resources to help you learn about deep learning, including teaching materials and lecture slides.</li>
  <li><strong>DevOps:</strong> DevOpsCube and Microsoft Azure offer a variety of resources to help you learn about DevOps, including top books, blogs, and services that will help you on your DevOps journey.</li>
  <li><strong>Web Development:</strong> freeCodeCamp.org and the MDN Web Docs offer a variety of resources to help you learn about web development, including a collection of excellent free resources and articles aimed at guiding complete beginners.</li>
</ul>

    </p>
    
    <butten class="w-[30%] bg-black text-white p-3 rounded pt-1"> Get Started</butten>
    
  
    </div>
    
</div>
  )
}
   