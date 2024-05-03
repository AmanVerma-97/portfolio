import React from 'react';
import Socials from './Socials';
import { TypeAnimation } from 'react-type-animation';
import profile from "../../assets/black-no-bg.png";
function About() {
  
  return (
    <>
      <div className="w-full h-full p-4 flex flex-col gap-4 items-center justify-center
                     lg:flex lg:flex-row lg:justify-between lg:items-center lg:pt-9 xl:pt-20">

          <div id='image' className="w-11/12 h-auto p-2 lg:h-3/6">
              <img src={profile} className='w-0 h-0 lg:h-[450px] lg:w-[360px] m-auto drop-shadow-xl rounded-full border border-black' alt='Profile pic'/>
          </div>

          <div id='about' className="w-11/12 h-auto p-2 lg:3/6 flex flex-col justify-center items-center gap-8 ">
                <div>
                  <span className="font-extrabold sm:text-7xl text-black text-5xl">
                      Aman Verma
                  </span>
                </div>

                <div>
                  <h2 className=' font-bold sm:text-3xl text-blue-900/75 text-xl'>
                  <TypeAnimation
                    sequence={[
                      // Same substring(if any) at the start will only be typed out once, initially
                      'Frontend Developer',
                      1500, // wait 1.5s before replacing one with other
                      'Backend Developer',
                      1500,
                      'Fullstack Developer',
                      1500,
                      'Software Engineer',
                      1500
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{display: 'inline-block' }}
                    repeat={Infinity}
                  />
                  </h2>
                  
                </div>
                <div>
                  <p className=' font-semibold text-md md:text-xl text-gray-900/75 block'>Eager and motivated full stack developer with a passion for building and delivering high-quality
                    web applications. Proven ability to work independently and as part of a team, and to learn new
                    technologies quickly.</p> 
                  <p className=' font-semibold text-md md:text-xl text-gray-900/75 block'>I am very optimistic and enthusiastic person who likes take on new challenges and try to give the optimum performance both as an individual and with a team. </p>
                </div>
                <div className='flex flex-row justify-between items-center gap-6 w-full' id='socials'>
                  <Socials/>
                </div>
          </div>
      </div>
    </>
    
  )
}

export default About;
