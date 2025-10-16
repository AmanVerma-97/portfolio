import React from 'react'
import kv from "../../assets/kv.png";
import amity from "../../assets/amity.png";
const education=[
    {url:amity, name:"B.Tech( Computer Science and Engineering )", year:"2016-2020", marks:"9.29 CGPA", institute:"Amity University Jaipur", achievement:"Gold medalist 2020 batch", medal:"https://cdn-icons-png.flaticon.com/128/625/625394.png"},
    {url:kv, name:"Class XII", year:"2014-1015", marks:"87.4%", institute:"Kendriya Vidyalaya, Rewari [CBSE board]", achievement:"", medal:""},
    {url:kv, name:"Class X", year:"2012-2013", marks:"10 CGPA", institute:"Kendriya Vidyalaya, Rewari [CBSE board]", achievement:"", medal:""},
]
function MainEducation() {
  return (
    <div className='flex flex-col gap-4 lg:gap-6 justify-center items-start'>
        {
            education.map((edu, index)=>{
                return(
                    <div key={index} className='p-2'>
                        <h2 className=' text-2xl lg:text-3xl font-extrabold text-blue-950 drop-shadow-xl'>{edu.name}
                        <img src={edu.url} alt={edu.name} className=' h-8 w-8 lg:inline rounded-full lg:ml-4 shadow-lg shadow-blue-950' loading='lazy'/></h2>
                        <h3 className=' text-xl lg:2xl font-bold text-orange-800 drop-shadow-lg mt-4 lg:mt-0'>{edu.institute}</h3>
                        <h4 className=' text-lg lg:text-xl font-semibold text-gray-700'>{edu.year}</h4>
                        <h4 className=' text-lg lg:text-xl font-semibold text-black'>{edu.marks}</h4>
                        <span className=' text-lg lg:text-xl font-semibold text-orange-600 drop-shadow-lg underline decoration-black'>{edu.achievement}</span>
                        {edu.medal ?<img src={edu.medal} alt='medal' className='h-8 w-8 inline'/> : ""}
                    </div>
                )
            })
        }
    </div>
  )
}

export default MainEducation