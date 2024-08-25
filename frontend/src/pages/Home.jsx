import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../public/banner.jpeg"

const Home = () => {
  return (
    
        <div className='w-full   h-[100vh] p-2 flex items-center justify-center bg-black '>
          <div className='w-fit h-50 p-4 '>
            
            <img src={banner} alt=""   className='h-full border-white shadow-white shadow-lg w-full object-cover rounded-md' />
          </div>


        </div>
    
  )
}

export default Home