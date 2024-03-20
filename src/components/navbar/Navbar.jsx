import React, { useState } from 'react'

const Links= [
    {link:"#", title:"About"},
    {link:"#", title:"Education"},
    {link:"#", title:"Internships"},
    {link:"#", title:"Projects"},
    {link:"#", title:"Contact"},
]

function Navbar() {

  const [toggle, setToggle]=useState(true);

  function handleToggle(){
    setToggle(!toggle);
    const menu= document.querySelector(".menu-list");
    menu.classList.toggle("hidden");
  }

  return (
    <nav className="w-screen bg-black text-white min-h-20 py-4 px-8 flex justify-between items-center sticky">
        <div className=""> 
            <button className="text-lg border-2 border-yellow-700 bg-orange-300 text-black p-2 rounded-md hover:bg-yellow-400">Download Resume</button>
        </div>

        <div className="hidden md:inline-block menu-list"> 
            <ul className="flex flex-col flex-wrap gap-4 absolute right-0 top-20 bg-black px-8 py-2
                            md:flex-row md:gap-8 md:relative md:top-0 lg:gap-12">

                { Links.map((link,index)=>(
                    <li key={index} className="hover:text-red-300 md:hover:text-orange-300 cursor-pointer font-medium lg:text-2xl md:text-lg transition duration-400"> 
                        {link.title} 
                    </li>
                ))}

            </ul>
        </div>

        <div className="md:hidden">
            <button onClick={handleToggle}>
                {toggle ? <img src="https://cdn-icons-png.flaticon.com/128/15178/15178747.png" alt="Hamburg menu" className="h-8 w-8 inline"/> 
                : <img src='https://cdn-icons-png.flaticon.com/128/15178/15178725.png' alt='Close' className="h-8 w-8 inline"/>
                } 
                 
            </button>
        </div>

    </nav>
  )
}

export default Navbar