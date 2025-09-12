import React, { useState } from 'react';
import Resume from "../../assets/Aman Verma Resume.pdf";
import { NavLink, Outlet } from 'react-router-dom';

const Links= [
    {url:"/", title:"About"},
    {url:"/education", title:"Education"},
    {url:"/internships", title:"Internships"},
    {url:"/projects", title:"Projects"},
    {url:"/certificates", title:"Certificates"},
    {url:"/skills", title:"Skills"},
    {url:"/contact", title:"Contact"},
    
]

function Navbar() {

  const [toggle, setToggle]=useState(true);

  function handleToggle(){
    setToggle(!toggle);
    const menu= document.querySelector(".menu-list");
    menu.classList.toggle("hidden");
  }

  function downloadResume(){
    window.open(Resume);
  }

  return (
    <>
    <nav className="w-screen bg-black text-white min-h-20 py-4 px-6 md:px-4 lg:px-8 flex justify-between items-center sticky z-50">
        {/* Resume Download Button */}
        <div className="border border-white rounded-md"> 
            <button className="text-lg bg-gray-950 drop-shadow-md text-white p-2 rounded-md hover:bg-gray-950/80  hover:shadow-md hover:text-orange-300 transition duration-300" onClick={downloadResume}>My Resume</button>
        </div>

        {/* Landing Pages */}
        <div className="hidden md:inline-block menu-list"> 
        
            <ul className="flex flex-col flex-wrap  absolute right-0 top-20 bg-black px-8 py-2 transition duration-500 
                            md:flex-row gap-[14px] md:gap-[11px] custom-lg:gap-[20px] lg:gap-8 xl:gap-10 md:relative md:top-0 ">

                { Links.map((link,index)=>(
                    <li key={index} className="hover:text-red-300 md:hover:text-orange-300 cursor-pointer font-medium xl:text-2xl lg:text-xl md:text-lg transition duration-500 "> 
                        <NavLink to={link.url} className="active:text-blue-400" onClick={handleToggle}> {link.title} </NavLink>
                    </li>
                ))}

            </ul>
        </div>
        
        {/* Hamburg menu */}
        <div className="md:hidden">
            <button onClick={handleToggle}>
                {toggle ? <img src="https://cdn-icons-png.flaticon.com/128/15178/15178747.png" alt="Hamburg menu" className="h-8 w-8 inline"/> 
                : <img src='https://cdn-icons-png.flaticon.com/128/15178/15178725.png' alt='Close' className="h-8 w-8 inline"/>
                } 
                 
            </button>
        </div>
    </nav> 
    {/* To display children componenets */}
    <Outlet/>
    </>
  )
}

export default Navbar