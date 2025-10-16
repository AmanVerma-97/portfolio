import React from 'react'
import MainEducation from './MainEducation'
import Certification from './Certification'

const Education = () => {
  return (
    <>
        <div className=' flex flex-col justify-center items-center gap-6  w-11/12 px-6 py-2 m-auto mt-2'>
          
          <div id='education' className=' p-2 flex flex-col gap-5 justify-center items-center lg:flex-row lg:gap-8 lg:justify-between lg:items-start w-full'>

            
            <div className='  w-full lg:w-3/6 '>
              <MainEducation/>
            </div>

            <div className=' w-full lg:w-3/6 '>
              <Certification/>
            </div>

          </div>

          {/* <div id='achievement' className=' p-4 flex flex-col justify-center lg:items-center items-start gap-4'>
            <h1 className=' drop-shadow-lg font-bold text-2xl md:text-4xl text-black/85 underline underline-offset-4'> Achievements </h1>

            <h3 className='drop-shadow-lg font-bold text-xl md:text-2xl text-blue-950/80 '> <span className='drop-shadow-lg font-bold text-xl md:text-2xl text-gray-900/75'> 1. </span > 
              Gold Medalist 2020 batch.<img src='https://cdn-icons-png.flaticon.com/128/625/625394.png' alt='medal' className='h-8 w-8 inline'/></h3>

            <h3 className='drop-shadow-lg font-bold text-xl md:text-2xl text-blue-950/80 '> <span className='drop-shadow-lg font-bold text-xl md:text-2xl text-gray-900/75'> 2. </span >
             Certificate of Excellence for all courses in MERN Stack Development Course.<img src='https://cdn-icons-png.flaticon.com/128/14535/14535834.png' alt='medal' className='h-8 w-8 inline'/></h3>
          </div> */}
        
        </div>
    </>
  )
}

export default Education