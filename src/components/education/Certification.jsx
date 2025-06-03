import React from 'react'
import mern from "../../assets/mern.png";
import upsc from "../../assets/upsc.png";
const education=[
    {url:mern, name:"MERN Stack Development", year:"August 2022- March 2024", institute:"Coding Ninjas", remarks:" Became a proficient Fullstack web developer with this thorough course covering concepts like HTML, CSS, JavaScript, ReactJS, MongoDB, Express, NodeJS, Firebase and more.", achievement:"Certificate of Excellence for all courses in MERN Stack Development Course.", medal:"https://cdn-icons-png.flaticon.com/128/14535/14535834.png"},
    {url:upsc, name:"UPSC preparation", year:"May 2020- December 2024", remarks:"Prepared for one of India's most competitive examinations, developing in-depth knowledge of national history, culture, politics, economy, and geography, and enhancing analytical and critical thinking skills.", achievement:"Cleared UPSC Prelims twice.", medal:""},
    
]

function Certification() {
  return (
    <div className='flex flex-col gap-4 lg:gap-6 justify-center items-start'>
        {
            education.map((edu, index)=>{
                return(
                    <div key={index} className='p-2'>
                        <h2 className=' text-2xl lg:text-3xl font-extrabold text-blue-950 drop-shadow-xl'>{edu.name}
                        <img src={edu.url} alt={edu.name} className=' h-8 w-8 lg:inline rounded-full lg:ml-4 shadow-lg shadow-blue-950'/></h2>
                        <h3 className=' text-xl lg:2xl font-bold text-orange-800 drop-shadow-lg mt-4 lg:mt-0'>{edu.institute}</h3>
                        <h4 className=' text-lg lg:text-xl font-semibold text-black mb-2'>{edu.year}</h4>
                        <h4 className=' text-base lg:text-lg font-semibold text-gray-700'>{edu.remarks}</h4>
                        <span className=' text-lg lg:text-xl font-semibold text-orange-600 drop-shadow-lg underline decoration-black'>{edu.achievement}</span>
                        {edu.medal ?<img src={edu.medal} alt='medal' className='h-8 w-8 inline'/> : ""}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Certification