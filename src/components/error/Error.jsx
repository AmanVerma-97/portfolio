import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className=' w-screen h-dvh'> 
        <div className=' mt-6 w-10/12 h-5/6 flex flex-col justify-center items-center bg-error bg-contain bg-no-repeat lg:bg-cover gap-6 m-auto'>
            <h2 className=' font-bold text-2xl text-black'> This page cannot be reached. </h2>
            <Link to="/">
              <button className=' border-2 border-orange-600 bg-orange-300 text-black p-4 text-xl font-semibold rounded-lg hover:bg-yellow-200'>Go Back</button>
            </Link>
        </div>
    </div>
    
  )
}

export default Error;