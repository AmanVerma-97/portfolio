import React from 'react'
import cn from "../../assets/cn.png";
import ttn from "../../assets/ttn.png";
import drdo from "../../assets/drdo.png";

const internships=[
  {url:cn, name:"Teaching Assistant", place:"Coding Ninjas", time:"March 2023 - May 2023", role:"Solved more than 300+ doubts for fellow batchmates in Java basics, OOPs and DSA. Received an overall rating of 4.96/5"},
  {url:ttn, name:"Software Intern", place:"TO THE NEW", time:"Feburary 2020 - April 2020", role:"Learned about basics of web development. Learned HTML5 and CSS. Learned about basics of JavaScript and Git."},
  {url:drdo, name:"Project Trainee", place:"DRDO", time:"June 2018 - July 2018", role:"Developed a 'Database Management and Inventory System' for chemical laboratory CFEES. Used PHP, MySQL for database operations. Designed frontend using HTML, CSS and JavaScript."},
  {url:drdo, name:"Project Trainee", place:"DRDO", time:"June 2019 - July 2019", role:"Developed a 'DAK mail system' using JSP and servlets . Designed the UI using HTML, CSS and JavaScript . Used Java for database operations ."},
]
function Internships() {
  return (
    <>
      <div className='border-2 border-green-600 w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center justify-center lg:justify-between p-2 m-auto'>
          {
            internships.map((prog, index)=>{
              return(
                <div key={index} className=' border-2 border-red-400 p-2 lg:h-64 h-auto'>
                  <h2 className='text-2xl lg:text-3xl font-extrabold text-blue-950 drop-shadow-xl'>{prog.name} </h2>
                  <h3 className=' text-xl lg:2xl font-bold text-orange-800 drop-shadow-lg'>{prog.place}
                  <img src={prog.url} alt={prog.place} className=' h-8 w-8 lg:inline rounded-full lg:ml-2 shadow-lg shadow-blue-950' /> </h3>
                  <h4 className=' text-lg lg:text-xl font-semibold text-black mb-2 mt-6'>{prog.time}</h4>
                  <h4 className=' text-base lg:text-lg font-semibold text-gray-700'>{prog.role}</h4>
                </div>
              )
            })
          }
      </div>
    </>
    
  )
}

export default Internships