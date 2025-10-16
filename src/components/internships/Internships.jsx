import React from 'react'
import cn from "../../assets/cn.png";
import ttn from "../../assets/ttn.png";
import drdo from "../../assets/drdo.png";
import drdoDAK from "../../assets/internships/DRDO-DAK.jpg";
import drdoCFEES from "../../assets/internships/DRDO-CFEES.jpg";
import TTN from "../../assets/internships/TO-THE-NEW.png";
import CN from "../../assets/internships/Coding-Ninjas.png";
import CST from "../../assets/CST.jpg";

const internships=[
  {url:CST, name:"Computer Science Teacher", place:"Home", time:"June 2023 - Present", role:"Provided personalized tutoring in DSA and project guidance to Class XI and XII students.Enhanced conceptual clarity and exam readiness, leading to improved academic performance with an average score of 95.", cert:CN},
  {url:cn, name:"Teaching Assistant", place:"Coding Ninjas", time:"March 2023 - May 2023", role:"Supported over 500 students with 1000+ queries in learning Data Structures and Algorithms and Web Development concepts. Clarified challenging topics and improved technical proficiency, achieving an overall rating of 4.96/5.", cert:CN},
  {url:ttn, name:"Software Intern", place:"TO THE NEW", time:"Feburary 2020 - April 2020", role:"Gained hands-on experience with HTML5, CSS, JavaScript, and Git in collaborative software development projects. Assisted in debugging and improving UI components by applying best coding practices during Sprints.", cert:TTN},
  {url:drdo, name:"Project Trainee", place:"DRDO", time:"June 2018 - July 2018", role:"Developed a 'Database Management and Inventory System' for chemical laboratory CFEES. Used PHP, MySQL for database operations.Designed a chemical tracking module with .NET and SQL Server, reducing manual discrepancies by 35% for 150+ assets.", cert:drdoCFEES},
]
function Internships() {

  const handleClick = (img) => {
    const newWindow = window.open(img, '_blank', 'noopener,noreferrer');
    if (newWindow) {
        newWindow.opener = null
    };
  }
  return (
    <>
      <div className='w-11/12 lg:w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-20 items-center justify-center lg:justify-between p-2 m-auto'>
          {
            internships.map((prog, index)=>{
              return(
                <div key={index} className=' p-2 lg:h-64 h-auto'>
                  <h2 className='text-2xl lg:text-3xl font-extrabold text-blue-950 drop-shadow-xl hover:cursor-pointer' onClick={()=>handleClick(prog.cert)}>{prog.name} </h2>
                  <h3 className=' text-xl lg:2xl font-bold text-orange-800 drop-shadow-lg hover:cursor-pointer'>{prog.place}
                  <img src={prog.url} alt={prog.place} className=' h-8 w-8 lg:inline rounded-full lg:ml-2 shadow-lg shadow-blue-950' loading='lazy'/> </h3>
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