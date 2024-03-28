import React from 'react'
import mern from "../../assets/mern.png";
import upsc from "../../assets/upsc.png";
const education=[
    {url:mern, name:"MERN Stack Development", year:"August 2022- March 2024", institute:"Coding Ninjas", remarks:" Became a proficient Fullstack web developer with this thorough course covering concepts like HTML, CSS, JavaScript, ReactJS, MongoDB, Express, NodeJS, Firebase and more."},
    {url:upsc, name:"UPSC preparation", year:"May 2020- September 2023", marks:"87.4%", institute:"StudyIQ IAS", remarks:"Prepared for one of the toughest exams in the country and learned a lot about our history, culture, economy, geography that helped me gain a better and wider perspective about about beautiful nation."},
    
]

function Certification() {
  return (
    <div className='flex flex-col gap-4 lg:gap-6 justify-center items-start'>
        {
            education.map((edu, index)=>{
                return(
                    <div key={index}>
                        <h2 className=' text-2xl lg:text-3xl font-extrabold text-blue-950 drop-shadow-xl'>{edu.name}
                        <img src={edu.url} alt={edu.name} className=' h-8 w-8 lg:inline rounded-full lg:ml-4 shadow-lg shadow-blue-950'/></h2>
                        <h3 className=' text-xl lg:2xl font-bold text-orange-800 drop-shadow-lg'>{edu.institute}</h3>
                        <h4 className=' text-lg lg:text-xl font-semibold text-black mb-2'>{edu.year}</h4>
                        <h4 className=' text-base lg:text-lg font-semibold text-gray-700'>{edu.remarks}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Certification